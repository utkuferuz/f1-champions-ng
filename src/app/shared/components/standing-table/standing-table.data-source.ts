import {BehaviorSubject, finalize, Observable, of} from "rxjs";
import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import {StandingService} from "@services/standing/standing.service";
import {RaceStanding} from "@entities/race-standing";
import {Params} from "@angular/router";

/*
Data source implementation in order to separate data handling logic from component side.
*/
export class StandingTableDataSource implements DataSource<RaceStanding> {

  private standingsSubject = new BehaviorSubject<RaceStanding[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  private rowCount = new BehaviorSubject<number>(0);

  public loading$ = this.loadingSubject.asObservable();
  public rowCount$ = this.rowCount.asObservable();

  constructor(private standingService: StandingService) {}

  connect(collectionViewer: CollectionViewer): Observable<RaceStanding[]> {
    /*
    We are serving our data to outer components who want to subscribe. Internally, we have BehaviorSubject
    where we update data to notify observers.
    */
    return this.standingsSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.standingsSubject.complete();
    this.loadingSubject.complete();
    this.rowCount.complete();
  }

  loadStandings(startYear: number, index: number, size: number, filter = '', sort = 'asc') {
    /*
    Server side paging for winners table is implemented here. We make sure that we don't get whole data on page load and
    offset is calculated dynamically according to startYear value of the component.
    */
    const offset = (startYear - 1950) + (index * size);
    const params: Params = { offset: offset.toString(), limit: size.toString()};
    this.loadingSubject.next(true);
    this.standingService.getByQuery(params)
      .pipe(
        finalize(() => this.loadingSubject.next(false))
      ).subscribe(standing => {
        this.rowCount$ = of(standing.totalCount);
        this.standingsSubject.next(standing.rows);
      });
  }
}

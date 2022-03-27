import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import {mergeWith, Observable, Subscription, tap} from "rxjs";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {StandingService} from "@services/standing/standing.service";
import {RaceService} from "@services/race/race.service";
import {RaceStanding} from "@entities/race-standing";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {StandingTableDataSource} from "@app/shared/components/standing-table/standing-table.data-source";

/*
Change detection is set to onPush in order to trigger change detection
only on input and template subscription changes.
Besides, animations are added for master-detail view on the data table.
*/
@Component({
  selector: 'app-standing-table',
  templateUrl: 'standing-table.component.html',
  styleUrls: ['standing-table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('500ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StandingTableComponent implements OnInit, OnDestroy {

  @Input() startYear: number;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  selectedRow: RaceStanding = null;
  dataSource: StandingTableDataSource;
  columns: string[] = [
    'detail',
    'season',
    'driverStandings',
    'code',
    'constructor',
    'nationality',
    'points',
    'wins',
    'round'
  ];
  subscriptions: Subscription[] = [];
  tableEvents$ = new Observable<any>();

  constructor(
    private cdr: ChangeDetectorRef,
    private standingService: StandingService,
    private raceService: RaceService) {}

  ngOnInit() {
    this.setDataSource();
  }

  /*
  Paginator subscription is handled here since it is not ready during ngOnInit()
   */
  ngAfterViewInit() {
    if (this.paginator) {
      const subscription = this.paginator?.page.pipe(
          tap(() => this.loadStandings())
        ).subscribe();
      this.subscriptions.push(subscription);
    }
  }

  /*
  Manual subscriptions are cancelled here just in case in order to prevent further memory issues
  */
  ngOnDestroy() {
    this.subscriptions.forEach(s => s?.unsubscribe());
    this.subscriptions = [];
  }

  /*
  This is where the expansion of row is handled.
  Race results for the selected year is received dynamically and assigned to row in order not to make
  duplicate service call for the same row.
  Besides, change detection is triggered manually since we use onPush
  strategy on the component so the changes in the object can be reflected
  */
  updateExpandedElement(row: RaceStanding) {
    const expandedRow = this.selectedRow === row ? null : row;
    const isServiceCallRequired = expandedRow && !expandedRow.Races;
    if (isServiceCallRequired) {
      const subscription = this.raceService
        .getRaceResultsByYear(row.season)
        .subscribe(races => {
          row.Races = races;
          this.selectedRow = expandedRow;
          this.cdr.detectChanges();
        });
      this.subscriptions.push(subscription);
    } else {
      this.selectedRow = expandedRow;
    }
  }

  private setDataSource() {
    this.dataSource = new StandingTableDataSource(this.standingService);
    this.loadStandings();
  }

  private onSortChanges() {
    // If the user changes the sort order, reset back to the first page.
    const subscription = this.sort
      .sortChange.subscribe(() => (this.paginator.pageIndex = 0));
    this.subscriptions.push(subscription);
  }

  private loadStandings() {
    const index = this?.paginator?.pageIndex ?? 0;
    const size = this?.paginator?.pageSize ?? 5;
    this.dataSource.loadStandings(this.startYear, index, size);
  }

}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Standing} from "@entities/standing";
import {map, Observable} from "rxjs";
import {Params} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class StandingService {

  constructor(private http: HttpClient) { }

  getByQuery(queryParams: Params = null): Observable<Standing> {
    const mapper = (response: any): Standing => {
      return {
        totalCount: parseInt(response.MRData.total) - 55,
        rows: response.MRData.StandingsTable.StandingsLists
      };
    };
    const url = `http://ergast.com/api/f1/driverStandings/1.json`;
    return this.http.get<Standing>(url, { params: queryParams })
      .pipe(map(mapper));
  }

}

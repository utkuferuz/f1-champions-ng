import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from "rxjs";
import {Race} from "@entities/race";
import {Params} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class RaceService {

  constructor(private http: HttpClient) { }

  getRaceResultsByYear(year: number, queryParams: Params = null, position = 1): Observable<Race[]> {
    const url = `http://ergast.com/api/f1/${year}/results/${position}.json`;
    const mapper = (response: any): Race[] => [...response.MRData.RaceTable.Races];
    return this.http.get<Race[]>(url, { params: queryParams })
      .pipe(map(mapper));
  }

}

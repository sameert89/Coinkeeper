import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUri } from '../../shared/utils/constants';
import { Observable, catchError, map } from 'rxjs';
import { DashboardComponentDataModel } from './dashboard-component-data.model';

@Injectable({
  providedIn: 'root',
})
export class DashboardDataLoaderService {
  options = {
    withCredentials: true,
    params: new HttpParams()
      .set('month', new Date().getMonth() + 1)
      .set('year', new Date().getFullYear()),
  };
  constructor(private http: HttpClient) {}
  private cleanData(data: any): any {
    // logic to clean the response data.
    return data;
  }
  fetchData(): Observable<DashboardComponentDataModel> {
    // Assuming apiUri, this.options are defined elsewhere in your class
    return this.http
      .get(apiUri + 'categorywise-expenditure', this.options)
      .pipe(
        map((response) => this.cleanData(response)),
        catchError((error) => {
          console.log(error);
          // Handle the error or rethrow, depending on your needs
          throw error;
        })
      );
  }
}

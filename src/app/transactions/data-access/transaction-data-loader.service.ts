import { of } from 'rxjs';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { apiUri } from '../../shared/utils/constants';

@Injectable({
  providedIn: 'root',
})
export class TransactionDataLoaderService {
  constructor(private http: HttpClient) {}

  fetchTransactions(dateStart: Date, dateEnd: Date) {
    if (!dateEnd || !dateStart) return of(false);
    const params = new HttpParams()
      .set('dateStart', dateStart.toString())
      .set('dateEnd', dateEnd.toString());

    return this.http.get(apiUri + 'transactions', {
      withCredentials: true,
      params: params,
    });
  }
  deleteTransaction(id: string) {
    return this.http.delete(apiUri + 'transactions/' + id, {
      withCredentials: true,
    });
  }
}

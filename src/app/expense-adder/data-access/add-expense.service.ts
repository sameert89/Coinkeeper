import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { apiUri } from '../../shared/utils/constants';
import { TransactionDataModel } from './transaction-data.model';

@Injectable({
  providedIn: 'root',
})
export class AddExpenseService {
  constructor(private http: HttpClient) {}
  createTransaction(data: TransactionDataModel): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = JSON.stringify(data);
    console.log(body);
    return this.http.post<any>(apiUri + 'transactions', JSON.parse(body), {
      headers: headers,
      withCredentials: true,
    });
  }
}

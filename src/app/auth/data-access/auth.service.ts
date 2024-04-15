import { catchError, map, Observable, of } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { apiUri } from '../../shared/utils/constants';
import { LoginFormModel } from './login-form.model';
import { RegisterFormModel } from './register-form.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _http: HttpClient) {}

  options: any = {
    withCredentials: true,
  };
  loginUser(formData: LoginFormModel): Observable<boolean> {
    return this._http
      .post<LoginFormModel>(apiUri + 'auth/login', formData, this.options)
      .pipe(
        map((response) => true),
        catchError((error) => {
          return of(false);
        })
      );
  }
  registerUser(formData: RegisterFormModel): Observable<boolean> {
    return this._http
      .post<RegisterFormModel>(apiUri + 'auth/register', formData, this.options)
      .pipe(
        map((response) => true),
        catchError((error) => {
          return of(false);
        })
      );
  }
  isLoggedIn(): Observable<boolean> {
    return this._http.get(apiUri + 'auth/session-validate', this.options).pipe(
      map((response) => true),
      catchError((error) => {
        return of(false);
      })
    );
    return of(true);
  }
}

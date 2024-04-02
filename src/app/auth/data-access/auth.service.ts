import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUri } from '../../shared/utils/constants';
import { RegisterFormModel } from './register-form.model';
import { LoginFormModel } from './login-form.model';
import { Observable, of, catchError, map } from 'rxjs';

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
      .post<LoginFormModel>(apiUri + 'login', formData, this.options)
      .pipe(
        map((response) => true),
        catchError((error) => {
          console.log(error);
          return of(false);
        })
      );
  }
  registerUser(formData: RegisterFormModel): Observable<boolean> {
    return this._http
      .post<RegisterFormModel>(apiUri + 'register', formData, this.options)
      .pipe(
        map((response) => true),
        catchError((error) => {
          console.log(error);
          return of(false);
        })
      );
  }
  isLoggedIn(): Observable<boolean> {
    return this._http.get(apiUri + 'session-validate', this.options).pipe(
      map((response) => true),
      catchError((error) => {
        console.log(error);
        return of(false);
      })
    );
  }
}

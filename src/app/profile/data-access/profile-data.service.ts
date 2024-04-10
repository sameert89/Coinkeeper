import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { UserDataModel } from '../../shared/data-access/user-data.model';
import { apiUri } from '../../shared/utils/constants';

@Injectable({
  providedIn: 'root',
})
export class ProfileDataService {
  constructor(private http: HttpClient) {}

  fetchProfileData(): Observable<any> {
    return this.http.get(apiUri + 'preferences', {
      withCredentials: true,
    });
  }
  updateProfileData(userData: UserDataModel) {
    return this.http.post(apiUri + 'preferences', userData, {
      withCredentials: true,
    });
  }
}

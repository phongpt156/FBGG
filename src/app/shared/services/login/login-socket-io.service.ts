import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { createCommonHeaders } from './../../../shared/functions/http-req';

import { BACKEND_PATH } from './../../../shared/constants/constants';
import { USER } from './../../../shared/api/api';

@Injectable()
export class LoginSocketIoService {
  constructor(
    private http: HttpClient
  ) {
    // this.socket = io(BACKEND_PATH);
  }

  login(user): Observable<any> {
    const options = createCommonHeaders();

    console.log(USER.login);
    return this.http.post(USER.login, user, options);
  }
}

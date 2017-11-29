import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Socket } from './../../constants/constants';

import { createCommonHeaders } from './../../../shared/functions/http-req';

import { USER } from './../../../shared/api/api';

import { AuthService } from './../../../shared/services/auth/auth.service';

@Injectable()
export class LoginService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) {
  }

  login(user): Observable<any> {
    const options = createCommonHeaders();

    return this.http.post(USER.login, user, options);
  }

  register(user) {
    Socket.emit('register', user)
    // const options = createCommonHeaders();

    // return this.http.post(USER.register, user, options);
  }

  consumeEvenOnRegister() {
    Socket.on('register_res', (data) => {
      if (data.token) {
        this.authService.setToken(data.token);
        this.router.navigate(['/']);
      }
    });
  }
}

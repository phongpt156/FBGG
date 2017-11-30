import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { createCommonHeaders } from './../../../shared/functions/http-req';

@Injectable()
export class PostService {
  constructor (
    private http: HttpClient,
    private router: Router,
  ) {}
}

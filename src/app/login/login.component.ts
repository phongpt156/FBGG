import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ERROR_MESSAGES } from './../shared/constants/constants';

import { LoginService } from './../shared/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessages = ERROR_MESSAGES;
  submitted = false;

  constructor(
    private _fb: FormBuilder,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.loginForm = this._fb.group({
      mail: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.valid) {
      const body: any = {};
      body.mail = this.loginForm.value.mail;
      body.password = this.loginForm.value.password;
      this.loginService.login(body)
      .subscribe(res => {
        console.log(res);
      });
    }
  }
}

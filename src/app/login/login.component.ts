import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LoginSocketIoService } from './../shared/services/login/login-socket-io.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private loginSocketIoService: LoginSocketIoService
  ) { }

  ngOnInit() {
    this.loginForm = this._fb.group({
      mail: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const body: any = {};
      body.mail = this.loginForm.value.mail;
      body.password = this.loginForm.value.password;
      this.loginSocketIoService.login(body)
      .subscribe(res => {
        console.log(res);
      });
    }
  }
}

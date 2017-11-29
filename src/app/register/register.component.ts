import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ERROR_MESSAGES } from './../shared/constants/constants';

import { LoginService } from './../shared/services/login/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  errorMessages = ERROR_MESSAGES;
  submitted = false;

  constructor(
    private _fb: FormBuilder,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.loginService.consumeEvenOnRegister();

    this.registerForm = this._fb.group({
      name: ['', Validators.required],
      nickName: [''],
      mail: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    const body: any = {};
    body.name = this.registerForm.value.name;
    body.nickName = this.registerForm.value.nickName;
    body.mail = this.registerForm.value.mail;
    body.password = this.registerForm.value.password;
    body.phone = this.registerForm.value.phone;
    body.address =this.registerForm.value.address;

    this.loginService.register(body);
  }
}

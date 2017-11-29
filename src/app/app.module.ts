import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule} from '@angular/material/progress-bar';

import { SharedModule } from './shared/modules/shared.module';
import { AppRoutingModule } from './app-routing.module';

import { TokenInterceptor } from './shared/services/auth/token.interceptor';

import { AuthService } from './shared/services/auth/auth.service';
import { LoginService } from './shared/services/login/login.service';
import { LoaderService } from './shared/services/loader/loader.service';
import { CheckLoginService }from './shared/guards/check-login.service';
import { AuthGuardService } from './shared/guards/auth-guard.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatProgressBarModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    AuthService,
    LoginService,
    LoaderService,
    AuthGuardService,
    CheckLoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

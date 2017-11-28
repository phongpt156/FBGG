import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomPreloader } from './shared/classes/custom.preloader';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';

const appRoutes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      { path: 'dang-nhap', component: LoginComponent },
      { path: 'dang-ky', component: RegisterComponent }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: CustomPreloader })
  ],
  exports: [
    RouterModule
  ],
  providers: [
    CustomPreloader
  ]
})
export class AppRoutingModule {}

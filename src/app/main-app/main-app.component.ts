import { Component, OnInit, AfterViewInit, HostBinding } from '@angular/core';

import { LoaderService } from './../shared/services/loader/loader.service';
import { AuthService } from './../shared/services/auth/auth.service';

@Component({
  selector: 'app-main-app',
  templateUrl: './main-app.component.html',
  styleUrls: ['./main-app.component.scss']
})
export class MainAppComponent implements OnInit {
  @HostBinding('class') classes = 'd-block';
  user: any = {};

  constructor(
    private loaderService: LoaderService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.loaderService.setLoadingStatus(false);
    }, 500);
    // if (this.authService.getToken() !== 'undefined') {
    //   this.user = this.authService.decodeToken();
    // }
  }
}

import { Component, OnInit, AfterViewInit, HostBinding } from '@angular/core';

import { LoaderService } from './../shared/services/loader/loader.service';

@Component({
  selector: 'app-main-app',
  templateUrl: './main-app.component.html',
  styleUrls: ['./main-app.component.scss']
})
export class MainAppComponent implements OnInit {
  @HostBinding('class') classes = 'd-block';

  constructor(
    public loaderService: LoaderService
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.loaderService.setLoadingStatus(false);
    }, 500);
  }
}

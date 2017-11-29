import { Component, OnInit, HostBinding } from '@angular/core';

import { DEFAULT_AVATAR_PATH } from './../../../shared/constants/constants';

@Component({
  selector: 'app-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.scss']
})
export class AsideMenuComponent implements OnInit {
  @HostBinding('class') classes = 'mat-elevation-z2';

  defaultAvatarPath: string = DEFAULT_AVATAR_PATH;

  constructor() { }

  ngOnInit() {
  }

}

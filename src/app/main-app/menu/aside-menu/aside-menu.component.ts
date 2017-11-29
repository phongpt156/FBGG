import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Router } from '@angular/router';

import { DEFAULT_AVATAR_PATH } from './../../../shared/constants/constants';

import { AuthService } from './../../../shared/services/auth/auth.service';

@Component({
  selector: 'app-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.scss']
})
export class AsideMenuComponent implements OnInit {
  @HostBinding('class') classes = 'mat-elevation-z2';
  @Input() user: any;
  defaultAvatarPath: string = DEFAULT_AVATAR_PATH;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  logout() {
    this.authService.removeToken();
    this.router.navigate(['/dang-nhap']);
  }
}

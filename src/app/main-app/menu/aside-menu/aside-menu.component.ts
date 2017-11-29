import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';

import { DEFAULT_AVATAR_PATH } from './../../../shared/constants/constants';

import { AuthService } from './../../../shared/services/auth/auth.service';

import { CreatePostDialogComponent } from './create-post-dialog/create-post-dialog.component';

@Component({
  selector: 'app-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.scss']
})
export class AsideMenuComponent implements OnInit {
  @HostBinding('class') classes = 'mat-elevation-z2';
  @Input() user: any;
  defaultAvatarPath: string = DEFAULT_AVATAR_PATH;
  createPostDialog: MatDialogRef<CreatePostDialogComponent>;
  dialogConfig: MatDialogConfig = {
    panelClass: ['mix-bg', 'w-50']
  }

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  logout() {
    this.authService.removeToken();
    this.router.navigate(['/dang-nhap']);
  }

  openCreatePostDialog() {
    this.createPostDialog = this.dialog.open(CreatePostDialogComponent, this.dialogConfig);
  }
}

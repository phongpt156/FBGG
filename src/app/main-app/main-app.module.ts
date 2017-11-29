import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { MainAppRoutingModule } from './main-app-routing.module';
import { SharedModule } from './../shared/modules/shared.module';

import { Autosize } from 'angular2-autosize';

import { AsideMenuComponent } from './menu/aside-menu/aside-menu.component';
import { MainAppComponent } from './main-app.component';
import { BodyComponent } from './homepage/body/body.component';
import { MainBodyComponent } from './homepage/body/main-body/main-body.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PostListComponent } from './homepage/body/main-body/post-list/post-list.component';
import { PostItemComponent } from './homepage/body/main-body/post-item/post-item.component';
import { RightMenuComponent } from './menu/right-menu/right-menu.component';
import { NoteListComponent } from './menu/right-menu/note-list/note-list.component';
import { SuggestComponent } from './menu/right-menu/suggest/suggest.component';

@NgModule({
  imports: [
    CommonModule,
    MainAppRoutingModule,
    SharedModule,
    MatCardModule,
  ],
  declarations: [
    Autosize,
    AsideMenuComponent,
    MainAppComponent,
    BodyComponent,
    MainBodyComponent,
    HomepageComponent,
    PostListComponent,
    PostItemComponent,
    RightMenuComponent,
    NoteListComponent,
    SuggestComponent
  ]
})
export class MainAppModule { }

import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
  ],
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  exports: [
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
  
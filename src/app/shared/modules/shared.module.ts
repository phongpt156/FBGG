import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
  ],
  imports: [
    MatButtonModule,
    ReactiveFormsModule
  ],
  exports: [
    ReactiveFormsModule,
    MatButtonModule,
  ]
})
export class SharedModule { }
  
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from './user-details.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [UserDetailsComponent],
  exports: [UserDetailsComponent],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class UserDetailsModule { }

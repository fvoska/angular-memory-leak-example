import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsLeakyComponent } from './user-details-leaky.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [UserDetailsLeakyComponent],
  exports: [UserDetailsLeakyComponent],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class UserDetailsLeakyModule { }

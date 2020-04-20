import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [UsersListComponent],
  exports: [UsersListComponent],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class UsersListModule { }

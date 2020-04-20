import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersContainerRoutingModule } from './users-container-routing.module';
import { UsersContainerComponent } from './users-container.component';
import { UsersListModule } from './users-list/users-list.module';
import { UserDetailsModule } from './user-details/user-details.module';
import { UserDetailsLeakyModule } from './user-details-leaky/user-details-leaky.module';

@NgModule({
  declarations: [UsersContainerComponent],
  imports: [
    CommonModule,
    UsersListModule,
    UserDetailsModule,
    UserDetailsLeakyModule,
    UsersContainerRoutingModule,
  ]
})
export class UsersContainerModule { }

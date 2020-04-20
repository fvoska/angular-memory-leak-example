import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserDetailsLeakyComponent } from './user-details-leaky/user-details-leaky.component';
import { UsersContainerComponent } from './users-container.component';

const routes: Routes = [{
  path: '',
  component: UsersContainerComponent,
  children: [{
    path: '',
    component: UsersListComponent,
  }, {
    path: ':id',
    component: UserDetailsComponent,
  }, {
    path: 'leaky/:id',
    component: UserDetailsLeakyComponent,
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersContainerRoutingModule { }

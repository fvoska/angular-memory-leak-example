import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'users',
}, {
  path: 'users',
  loadChildren: () => import('./pages/users-container/users-container.module').then((m) => m.UsersContainerModule),
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

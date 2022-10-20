import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersFormContainerComponent } from './users-form-container/users-form-container.component';
import { UsersListContainerComponent } from './users-list-container/users-list-container.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'list', pathMatch: 'full'
  },
  {
    path: '', component: UsersListContainerComponent
  },
  {
    path: 'add', component: UsersFormContainerComponent
  },
  {
    path: 'edit/:id', component: UsersFormContainerComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

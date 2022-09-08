import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersFormContainerComponent } from './users-form-container/users-form-container.component';
import { UsersListContainerComponent } from './users-list-container/users-list-container.component';
import { UsersComponent } from './users.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

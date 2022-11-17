import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { UsersFormContainerComponent } from './users-form-container/users-form-container.component';
import { UsersFormPresentationComponent } from './users-form-container/users-form-presentation/users-form-presentation.component';
import { UsersListContainerComponent } from './users-list-container/users-list-container.component';
import { UsersListPresentationComponent } from './users-list-container/users-list-presentation/users-list-presentation.component';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UsersService } from './users.service';


@NgModule({
  declarations: [
    UsersComponent,
    UsersFormContainerComponent,
    UsersListContainerComponent,
    UsersFormPresentationComponent,
    UsersListPresentationComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule
  ],
  exports:[],
  providers:[
    UsersService
  ]
})
export class UsersModule { }

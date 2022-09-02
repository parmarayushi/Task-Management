import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users.component';
import { UsersFormContainerComponent } from './users-form-container/users-form-container.component';
import { UsersListContainerComponent } from './users-list-container/users-list-container.component';
import { UsersFormPresentationComponent } from './users-form-container/users-form-presentation/users-form-presentation.component';
import { UsersListPresentationComponent } from './users-list-container/users-list-presentation/users-list-presentation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from './users.service';
import { UserRolePipe } from './pipe/user-role.pipe';


@NgModule({
  declarations: [
    UsersComponent,
    UsersFormContainerComponent,
    UsersListContainerComponent,
    UsersFormPresentationComponent,
    UsersListPresentationComponent,
    UserRolePipe
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers:[
    UsersService
  ]
})
export class UsersModule { }

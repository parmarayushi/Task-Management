import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskComponent } from './task.component';
import { TaskFormContainerComponent } from './task-form-container/task-form-container.component';
import { TaskListContainerComponent } from './task-list-container/task-list-container.component';
import { TaskFormPresentationComponent } from './task-form-container/task-form-presentation/task-form-presentation.component';
import { TaskListPresentationComponent } from './task-list-container/task-list-presentation/task-list-presentation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskService } from './task.service';


@NgModule({
  declarations: [
    TaskComponent,
    TaskFormContainerComponent,
    TaskListContainerComponent,
    TaskFormPresentationComponent,
    TaskListPresentationComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    TaskFormContainerComponent,
    TaskListContainerComponent
  ],
  providers:[
    TaskService
  ]
})
export class TaskModule { }

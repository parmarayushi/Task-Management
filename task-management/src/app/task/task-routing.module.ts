import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskFormContainerComponent } from './task-form-container/task-form-container.component';
import { TaskListContainerComponent } from './task-list-container/task-list-container.component';

const routes: Routes = [
  { 
    path: '', redirectTo: 'list', pathMatch: 'full' 
  },
  {
    path: 'list', component: TaskListContainerComponent
  },
  {
    path: 'add', component: TaskFormContainerComponent
  },
  {
    path: 'edit/:id', component: TaskFormContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }

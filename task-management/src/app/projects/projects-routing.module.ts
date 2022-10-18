import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectFormContainerComponent } from './project-form-container/project-form-container.component';
import { ProjectListContainerComponent } from './project-list-container/project-list-container.component';
import { ProjectViewContainerComponent } from './project-view-container/project-view-container.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'list', pathMatch: 'full'
  },
  {
    path: 'list', component: ProjectListContainerComponent
  },
  {
    path: 'add', component: ProjectFormContainerComponent
  },
  {
    path: 'view/:id', component: ProjectViewContainerComponent
  },
  {
    path: 'edit/:id', component: ProjectFormContainerComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }

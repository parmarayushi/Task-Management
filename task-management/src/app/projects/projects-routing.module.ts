import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectFormContainerComponent } from './project-form-container/project-form-container.component';
import { ProjectListContainerComponent } from './project-list-container/project-list-container.component';

const routes: Routes = [{
  path: '', component: ProjectListContainerComponent,
  children: [
    {
      path: 'project-form',
      component: ProjectFormContainerComponent
    },
    {
      path: 'project-list',
      component: ProjectListContainerComponent
    },
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'project-list'
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }

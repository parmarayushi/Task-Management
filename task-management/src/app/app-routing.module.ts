import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectFormContainerComponent } from './projects/project-form-container/project-form-container.component';
import { ProjectListContainerComponent } from './projects/project-list-container/project-list-container.component';
import { ProjectViewContainerComponent } from './projects/project-view-container/project-view-container.component';
import { TaskFormContainerComponent } from './projects/task-form-container/task-form-container.component';
import { UsersFormContainerComponent } from './users/users-form-container/users-form-container.component';
import { UsersListContainerComponent } from './users/users-list-container/users-list-container.component';

const routes: Routes = [
  { path: "", redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
  { path: 'project', loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule) },
  {
    path: 'users-list', component: UsersListContainerComponent
  },
  {
    path: 'users-form', component: UsersFormContainerComponent
  },
  {
    path: 'project-form', component: ProjectFormContainerComponent
  },
  {
    path: 'project-list', component: ProjectListContainerComponent
  },
  {
    path: 'project-view/:id', component: ProjectViewContainerComponent
  },
  {
    path: 'project-form/edit/:id', component: ProjectFormContainerComponent
  },
  {
    path: 'users-form/edit/:id', component: UsersFormContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

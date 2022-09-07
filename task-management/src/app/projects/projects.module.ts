import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ProjectFormContainerComponent } from './project-form-container/project-form-container.component';
import { ProjectFormPresentationComponent } from './project-form-container/project-form-presentation/project-form-presentation.component';
import { ProjectListContainerComponent } from './project-list-container/project-list-container.component';
import { ProjectListPresentationComponent } from './project-list-container/project-list-presentation/project-list-presentation.component';
import { ProjectViewContainerComponent } from './project-view-container/project-view-container.component';
import { ProjectViewPresentationComponent } from './project-view-container/project-view-presentation/project-view-presentation.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { ProjectsService } from './projects.service';
import { TaskFormContainerComponent } from './task-form-container/task-form-container.component';
import { TaskFormPresentationComponent } from './task-form-container/task-form-presentation/task-form-presentation.component';



@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectFormContainerComponent,
    ProjectListContainerComponent,
    ProjectFormPresentationComponent,
    ProjectListPresentationComponent,
    ProjectViewContainerComponent,
    ProjectViewPresentationComponent,
    TaskFormContainerComponent,
    TaskFormPresentationComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
  ],
  exports: [
    ProjectFormContainerComponent,
    ProjectListContainerComponent,
    ProjectViewContainerComponent,
  ],
  providers: [
    ProjectsService
  ]
})
export class ProjectsModule { }

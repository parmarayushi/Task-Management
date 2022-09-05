import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { ProjectFormContainerComponent } from './project-form-container/project-form-container.component';
import { ProjectListContainerComponent } from './project-list-container/project-list-container.component';
import { ProjectFormPresentationComponent } from './project-form-container/project-form-presentation/project-form-presentation.component';
import { ProjectListPresentationComponent } from './project-list-container/project-list-presentation/project-list-presentation.component';
import { ProjectsService } from './projects.service';


@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectFormContainerComponent,
    ProjectListContainerComponent,
    ProjectFormPresentationComponent,
    ProjectListPresentationComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
  ],
  providers:[
    ProjectsService
  ]
})
export class ProjectsModule { }

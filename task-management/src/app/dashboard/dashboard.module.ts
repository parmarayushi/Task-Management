import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TaskService } from '../task/task.service';
import { DashboardContainerComponent } from './dashboard-container/dashboard-container.component';
import { DashboardPresentationComponent } from './dashboard-container/dashboard-presentation/dashboard-presentation.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardContainerComponent,
    DashboardPresentationComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  providers:[
    TaskService,
  ]
})
export class DashboardModule { }

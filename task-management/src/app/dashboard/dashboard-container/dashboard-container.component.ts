import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from 'src/app/projects/project.model';
import { CommonService } from 'src/app/shared/services/common.service';
import { Task } from 'src/app/task/task.model';
import { TaskService } from 'src/app/task/task.service';
import { Users } from 'src/app/users/users.model';

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
})
export class DashboardContainerComponent implements OnInit {

  public employeeData$:Observable<Users[]>=new Observable();
  public projectData$:Observable<Project[]>=new Observable();
  public taskData$:Observable<Task[]>=new Observable();

  constructor(private commonServics:CommonService,private taskService:TaskService) { }

  ngOnInit(): void {
    this.props()
  }

  public props(){
    this.employeeData$=this.commonServics.getUsers();
    this.projectData$=this.commonServics.getProjectdata();
    this.taskData$=this.taskService.getTaskData();
  }

}

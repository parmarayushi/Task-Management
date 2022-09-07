import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Task } from '../project.model';
import { ProjectsService } from '../projects.service';
import { TaskFormPresenterService } from './task-form-presenter/task-form-presenter.service';

@Component({
  selector: 'app-task-form-container',
  templateUrl: './task-form-container.component.html'
})
export class TaskFormContainerComponent implements OnInit {

  public taskData$:Observable<Task[]>=new Observable();
  constructor(private projectService:ProjectsService,private route:Router) { }

  ngOnInit(): void {
    this.getTaskData()
  }

  public getTaskData(){
    this.taskData$=this.projectService.getTaskData();
  }

  public addTaskData(form:Task){
    this.projectService.addTaskData(form).subscribe(()=>{
      alert('Data Added Successfully');
      // this.route.navigateByUrl('project-view/:id')
    })
  }
}

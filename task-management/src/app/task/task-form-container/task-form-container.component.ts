import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Project } from 'src/app/projects/project.model';
import { CommonService } from 'src/app/shared/services/common.service';
import { Employees } from 'src/app/users/users.model';
import { Task } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-form-container',
  templateUrl: './task-form-container.component.html'
})
export class TaskFormContainerComponent implements OnInit {

  public id: number;
  public membersData$: Observable<Employees[]> = new Observable();
  public projectData$: Observable<Project[]> = new Observable();
  public taskData$: Observable<Task> = new Observable();

  constructor(
    private commonService: CommonService,
    private taskService: TaskService,
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.id = parseInt(this.activatedRoute.snapshot.params['id']);
    if (this.id) {
      this.taskData$ = this.taskService.getTaskById(this.id);
    }
  }

  ngOnInit(): void {
    this.getMembers();
    this.getProjects();
  }

  /**
   * @name getMembers
   * @description calls the method from commonservice.
   */
  public getMembers() {
    this.membersData$ = this.commonService.getEmployees();
  }

  /**
   * @name getProjects
   * @description calls the method from comonservice. 
   */
  public getProjects() {
    this.projectData$ = this.commonService.getProjectdata();
  }

  /**
   * @name addTasks
   * @param form 
   * @description calls the method from taskservice and subscribes it.
   */
  public addTasks(form: Task) {
    this.taskService.addTaskData(form).subscribe(() => {
      setTimeout(() => {
        this.route.navigateByUrl('tasks');
      }, 2000);
    })
  }

  /**
   * @name editTasks
   * @param form 
   * @description calls the method from task service and subscribes it.
   */
  public editTasks(form: Task) {
    this.taskService.editTask(this.id, form).subscribe(() => {
      setTimeout(() => {
        this.route.navigateByUrl('tasks');
      }, 2000);
    })
  }
}

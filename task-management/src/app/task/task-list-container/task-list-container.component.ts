import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list-container',
  templateUrl: './task-list-container.component.html'
})
export class TaskListContainerComponent implements OnInit {

  public taskData$: Observable<Task[]> = new Observable();

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.getTasks();
  }

  /**
   * @name getTasks
   * @description calls the method from the taskservice.
   */
  public getTasks() {
    this.taskData$ = this.taskService.getTaskData();
  }

  /**
   * @name deleteTask
   * @param id 
   * @description calls the method from taskservice and subscribes it.
   */
  public deleteTask(id: number) {
    this.taskService.deleteTask(id).subscribe(() => {
      alert('Task Deleted.')
      this.getTasks();
    })
  }
}

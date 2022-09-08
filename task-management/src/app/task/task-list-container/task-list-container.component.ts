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
  public getTasks() {
    this.taskData$ = this.taskService.getTaskData();
  }

  public deleteTask(id: number) {
    this.taskService.deleteTask(id).subscribe(() => {
      alert('Task with id ' + id + ' deleted');
      this.getTasks();
    })
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../../task.model';
import { TaskListPresenterService } from '../task-list-presenter/task-list-presenter.service';

@Component({
  selector: 'app-task-list-presentation',
  templateUrl: './task-list-presentation.component.html'
})
export class TaskListPresentationComponent implements OnInit {

  @Input() public set taskData(value: Task[] | null) {
    if (value) {
      this._taskData = value;
    }
  }

  public get taskData(): Task[] | null {
    return this._taskData;
  }

  @Output() public delete: EventEmitter<number>;

  private _taskData: Task[];

  constructor(private taskPresenterService: TaskListPresenterService, private route: Router) {
    this.delete = new EventEmitter();
  }

  ngOnInit(): void {
    this.taskPresenterService.deleteData$.subscribe((result: number) => {
      this.delete.emit(result);
    })
  }

  public onEdit(id: number) {
    this.route.navigateByUrl(`task-form/edit/${id}`);
  }

  public onDelete(id: number) {
    this.taskPresenterService.onDelete(id);
  }
}

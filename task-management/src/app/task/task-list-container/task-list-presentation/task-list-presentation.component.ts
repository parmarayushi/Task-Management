import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UtilityService } from 'src/app/shared/services/utility.service';
import { Task } from '../../task.model';
import { TaskListPresenterService } from '../task-list-presenter/task-list-presenter.service';

@Component({
  selector: 'app-task-list-presentation',
  templateUrl: './task-list-presentation.component.html',
  viewProviders: [TaskListPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskListPresentationComponent implements OnInit {

  @Input() public set taskData(value: Task[] | null) {
    if (value) {
      if (!this._newTaskList) {
        this._newTaskList = value;
        this.changePage(this._newTaskList.slice(0, 4))
      }
      this._taskData = value;
    }
  }

  public get taskData(): Task[] {
    return this._taskData;
  }

  @Output() public delete: EventEmitter<number>;

  public searchText: string;
  public newTask: Task[];

  private _taskData: Task[];
  private _newTaskList: Task[];

  constructor(
    private taskPresenterService: TaskListPresenterService,
    private utilityService: UtilityService,
    private route: Router
  ) {
    this.delete = new EventEmitter();
    this.searchText = ''
  }

  ngOnInit(): void {
    this.taskPresenterService.deleteData$.subscribe((result: number) =>
      this.delete.emit(result)
    )

    this.utilityService.searchData$.subscribe((res) => {
      this._taskData = res;
    })
  }

  public onEdit(id: number) {
    this.route.navigateByUrl(`tasks/edit/${id}`);
  }

  public onDelete(id: number) {
    this.taskPresenterService.deletePopUp(id);
  }

  public onSearch() {
    this.utilityService.onFilter(this._newTaskList, this.searchText);
  }

  public changePage(taskList: Task[]) {
    this.newTask = taskList;
  }
}

import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
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

  /**
   * @name taskData
   * @description sets the list.
   */
  @Input() public set taskData(value: Task[] | null) {
    if (value) {
      if (!this._newTaskList) {
        this._newTaskList = value;
      }
      this._taskData = value;
    }
  }

  /**
   * @name taskData
   * @description gets the list of task.
   */
  public get taskData(): Task[] {
    return this._taskData;
  }

  @Output() public delete: EventEmitter<number>;

  @HostListener('window:resize', ['$event'])
  public onResize(event: any) {
    this.innerWidth = window.innerWidth;
    this.innerWidth >= 576 ? (this.isTableView = true, this.isCardView = false) : (this.isTableView = false, this.isCardView = true);
  }

  public searchText: string;
  public newTask: Task[];
  public isTableView: boolean;
  public isCardView: boolean;
  public innerWidth: number;

  private _taskData: Task[];
  private _newTaskList: Task[];

  constructor(
    private taskPresenterService: TaskListPresenterService,
    private utilityService: UtilityService,
    private cdr:ChangeDetectorRef
  ) {
    this.delete = new EventEmitter();
    this.searchText = '';
    this.isTableView = false;
    this.isCardView = false;
  }

  ngOnInit(): void {
    this.onResize(event);
    
    this.taskPresenterService.deleteData$.subscribe((result: number) =>
      this.delete.emit(result)
    )

    this.utilityService.searchData$.subscribe((res) => {
      this._taskData = res;
    })
  }

  /**
   * @name onDelete
   * @param id 
   * @description deletes the data on click of button.
   */
  public onDelete(id: number) {
    this.taskPresenterService.deletePopUp(id);
  }

  /**
   * @name onSearch
   * @description search the data from the list.
   */
  public onSearch() {
    this.utilityService.search(this._newTaskList, this.searchText);
  }

  /**
   * @name changePage
   * @param taskList 
   * @description change the list on click of numbers in pagination.
   */
  public changePage(taskList: Task[]) {
    this.newTask = taskList;
    this.cdr.detectChanges()
  }
}

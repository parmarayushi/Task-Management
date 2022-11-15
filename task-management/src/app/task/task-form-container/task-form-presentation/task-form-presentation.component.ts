import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Project } from 'src/app/projects/project.model';
import { Employees } from 'src/app/users/users.model';
import { Task } from '../../task.model';
import { TaskFormPresenterService } from '../task-form-presenter/task-form-presenter.service';

@Component({
  selector: 'app-task-form-presentation',
  templateUrl: './task-form-presentation.component.html',
  viewProviders: [TaskFormPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskFormPresentationComponent implements OnInit {

  /**
   * @name taskData
   * @description sets the list of tasks.
   */
  @Input() public set taskData(value: Task | null) {
    if (value) {
      this.formTitle = "Edit Task"
      this.taskForm.patchValue(value)
      this._taskData = value;
    }
  }

  /**
   * @name taskData
   * @description gets the list of tasks.
   */
  public get taskData(): Task | null {
    return this._taskData;
  }

  /**
   * @name projectData
   * @description sets the list of projects.
   */
  @Input() public set projectData(value: Project[] | null) {
    if (value) {
      this._projectData = value;

    }
  }

  /**
   * @name projectData
   * @description gets the list of projects.
   */
  public get projectData(): Project[] | null {
    return this._projectData;
  }

  /**
   * @name memberData
   * @description sets the list of employees.
   */
  @Input() public set memberData(value: Employees[] | null) {
    if (value) {
      this._membersData = value;
    }
  }

  /**
   * @name memberData
   * @description gets the list of employees.
   */
  public get memberData(): Employees[] | null {
    return this._membersData;
  }

  @Output() public add: EventEmitter<Task>;
  @Output() public edit: EventEmitter<Task>;

  public taskForm: FormGroup;
  public formTitle: string;
  public formSubmitted: boolean;
  public successMsg: boolean;
  public updateMsg: boolean;

  private _taskData: Task;
  private _projectData: Project[];
  private _membersData: Employees[];

  constructor(
    private taskFormPresenter: TaskFormPresenterService,
    private route: Router
  ) {
    this.taskForm = this.taskFormPresenter.buildForm();
    this.add = new EventEmitter();
    this.edit = new EventEmitter();
    this.formTitle = "New Task";
    this.formSubmitted = false;
    this.successMsg = false
    this.updateMsg = false
  }

  ngOnInit(): void {
    this.taskFormPresenter.taskFormData$.subscribe((data) => 
      this.formTitle === "New Task" ? this.add.emit(data) : this.edit.emit(data)
    )
  }

  /**
   * @name getControls
   * @description gets the controls of the taskform.
   */
  public get getControls() {
    return this.taskForm.controls;
  }

  /**
   * @name onSubmit
   * @description submits the taskform on click.
   */
  public onSubmit() {
    this.formSubmitted = !this.taskForm.valid;
    if (!this.formSubmitted) {
      this.taskFormPresenter.submit(this.taskForm);
      if (this.formTitle == "New Task") {
        this.successMsg = true
      } else {
        this.updateMsg = true
      }
    }
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Project } from 'src/app/projects/project.model';
import { Users } from 'src/app/users/users.model';
import { Task } from '../../task.model';
import { TaskFormPresenterService } from '../task-form-presenter/task-form-presenter.service';

@Component({
  selector: 'app-task-form-presentation',
  templateUrl: './task-form-presentation.component.html'
})
export class TaskFormPresentationComponent implements OnInit {

  @Input() public set taskData(value: Task | null) {
    if (value) {
      this.formTitle = "Edit Task"
      this.taskForm.patchValue(value)
      this._taskData = value;
    }
  }

  public get taskData(): Task | null {
    return this._taskData;
  }

  @Input() public set projectData(value: Project[] | null) {
    if (value) {
      this._projectData = value;

    }
  }

  public get projectData(): Project[] | null {
    return this._projectData;
  }

  @Input() public set memberData(value: Users[] | null) {
    if (value) {
      this._membersData = value;
    }
  }

  public get memberData(): Users[] | null {
    return this._membersData;
  }

  @Output() public add: EventEmitter<Task>;
  @Output() public edit: EventEmitter<Task>;

  public taskForm: FormGroup;
  public formTitle: string

  private _taskData: Task;
  private _projectData: Project[];
  private _membersData: Users[];

  constructor(private taskFormPresenter: TaskFormPresenterService, private route: Router) {
    this.taskForm = this.taskFormPresenter.buildForm();
    this.add = new EventEmitter();
    this.edit = new EventEmitter();
    this.formTitle = "New Task"
  }

  ngOnInit(): void {
    this.taskFormPresenter.taskFormData$.subscribe((data) => {
      this.formTitle === "New Task" ? this.add.emit(data) : this.edit.emit(data);
    })
  }

  public onSubmit() {
    this.taskFormPresenter.onSubmit(this.taskForm);
  }

  public onCancel() {
    this.route.navigateByUrl('task-list')
  }
}

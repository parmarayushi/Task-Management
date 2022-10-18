import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/projects/project.model';
import { Task } from 'src/app/task/task.model';
import { Users } from 'src/app/users/users.model';
import { DashboardPresenterService } from '../dashboard-presenter/dashboard-presenter.service';

@Component({
  selector: 'app-dashboard-presentation',
  templateUrl: './dashboard-presentation.component.html',
  viewProviders:[DashboardPresenterService],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class DashboardPresentationComponent implements OnInit {

  @Input() public set employeeData(value: Users[] | null) {
    if (value) {
      this._employeeData = value;
    }
  }

  public get employeeData(): Users[] {
    return this._employeeData;
  }

  @Input() public set projectData(value: Project[] | null) {
    if (value) {
      this._projectData = value;
    }
  }

  public get projectData(): Project[] {
    return this._projectData;
  }

  @Input() public set taskData(value: Task[] | null) {
    if (value) {
      this._taskData = value;
      this.status();
    }
  }

  public get taskData(): Task[] {
    return this._taskData;
  }

  public pending: Task[];
  public inProgress: Task[];
  public done: Task[];

  private _employeeData: Users[];
  private _projectData: Project[];
  private _taskData: Task[];

  constructor() {
  }

  ngOnInit(): void {
  }

  public status() {
    this.pending = this._taskData.filter((data) => data.status === "Pending");
    this.inProgress = this._taskData.filter((data) => data.status === "In Progress");
    this.done = this._taskData.filter((data) => data.status === "Done");
  }

}

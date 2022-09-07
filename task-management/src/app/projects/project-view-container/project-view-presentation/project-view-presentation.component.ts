import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Project, Task } from '../../project.model';
import { ProjectViewPresenterService } from '../project-view-presenter/project-view-presenter.service';

@Component({
  selector: 'app-project-view-presentation',
  templateUrl: './project-view-presentation.component.html',
  viewProviders: [ProjectViewPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectViewPresentationComponent implements OnInit {

  @Input() public set projectView(value: Project | null) {
    if (value) {
      this._projectView = value
    }
  }

  public get projectView(): Project {
    return this._projectView;
  }

  @Input() public set taskData(value: Task[] | null) {
    if (value) {
      this._taskData = value
      console.log(value);
    }
  }

  public get taskData(): Task[]  {
    return this._taskData;
  }

  private _projectView: Project;
  private _taskData: Task[];

  constructor(private projectviewPreseter: ProjectViewPresenterService) { }

  ngOnInit(): void {
  }

  public opentaskForm() {
    this.projectviewPreseter.openTaskModel()
  }
}

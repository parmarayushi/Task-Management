import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Users } from 'src/app/users/users.model';
import { Project } from '../../project.model';
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

  private _projectView: Project;
  public projectData:Users[];

  constructor() { }

  ngOnInit(): void {
  }

}

import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Project } from '../../project.model';
import { ProjectViewPresenterService } from '../project-view-presenter/project-view-presenter.service';

@Component({
  selector: 'app-project-view-presentation',
  templateUrl: './project-view-presentation.component.html',
  viewProviders: [ProjectViewPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectViewPresentationComponent implements OnInit {

  /**
   * @name projectView
   * @description sets the list.
   */
  @Input() public set projectView(value: Project | null) {
    if (value) {
      this._projectView = value       
    }
  }

  /**
   * @name projectView
   * @description gets the list of project.
   */
  public get projectView(): Project {
    return this._projectView;
  }

  private _projectView: Project;

  constructor() { }

  ngOnInit(): void {
  }

}

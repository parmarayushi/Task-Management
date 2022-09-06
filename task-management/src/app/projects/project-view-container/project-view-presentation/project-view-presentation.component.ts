import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../project.model';

@Component({
  selector: 'app-project-view-presentation',
  templateUrl: './project-view-presentation.component.html'
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

  constructor() { }

  ngOnInit(): void {
  }

}

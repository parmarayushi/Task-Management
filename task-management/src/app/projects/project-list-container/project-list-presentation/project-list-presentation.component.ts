import { NumberSymbol } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../../project.model';
import { ProjectListPresenterService } from '../project-list-presenter/project-list-presenter.service';

@Component({
  selector: 'app-project-list-presentation',
  templateUrl: './project-list-presentation.component.html',
  viewProviders:[ProjectListPresenterService],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ProjectListPresentationComponent implements OnInit {

  @Input() public set projectList(value: Project[] | null) {
    if (value) {
      this._projectList = value
    }
  }

  public get projectList(): Project[] {
    return this._projectList
  }

  private _projectList: Project[];
  
  constructor(public route: Router) { }

  ngOnInit(): void {
  }

  public onView(id: number) {
    this.route.navigateByUrl(`project-view/${id}`)
  }

  public onEdit(id:number){
    this.route.navigateByUrl(`project-form/edit/${id}`)
  }

}

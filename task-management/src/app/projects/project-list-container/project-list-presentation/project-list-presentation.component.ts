import { NumberSymbol } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../../project.model';

@Component({
  selector: 'app-project-list-presentation',
  templateUrl: './project-list-presentation.component.html',
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

}

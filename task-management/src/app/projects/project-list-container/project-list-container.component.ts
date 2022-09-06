import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from 'src/app/users/users.model';
import { Project } from '../project.model';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-project-list-container',
  templateUrl: './project-list-container.component.html'
})
export class ProjectListContainerComponent implements OnInit {

  public projectList$: Observable<Project[]> = new Observable();
  public membersList$: Observable<Users[]> = new Observable();

  constructor(private projectService: ProjectsService) { }

  ngOnInit(): void {
    this.getProjectList()
  }

  public getProjectList() {
    this.projectList$ = this.projectService.getProjectdata()
  }
}

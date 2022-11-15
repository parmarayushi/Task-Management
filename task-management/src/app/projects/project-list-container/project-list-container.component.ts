import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonService } from 'src/app/shared/services/common.service';
import { Project } from '../project.model';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-project-list-container',
  templateUrl: './project-list-container.component.html'
})
export class ProjectListContainerComponent implements OnInit {

  public id: number;
  public projectList$: Observable<Project[]> = new Observable();

  constructor(
    private commonService: CommonService,
    private projectService: ProjectsService
  ) { }

  ngOnInit(): void {
    this.getProjectList()
  }

  /**
   * @name getProjectList
   * @description calls the method from commonservice.
   */
  public getProjectList() {
    this.projectList$ = this.commonService.getProjectdata()
  }

  /**
   * @name deleteProject
   * @param id 
   * @description calls the method from projectservice and subscribes it.
   */
  public deleteProject(id: number) {
    this.projectService.deleteProject(id).subscribe(() => {
      this.getProjectList();
    })
  }
}

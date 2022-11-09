import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonService } from 'src/app/shared/services/common.service';
import { Employees } from 'src/app/users/users.model';
import { Project } from '../project.model';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-project-form-container',
  templateUrl: './project-form-container.component.html'
})
export class ProjectFormContainerComponent implements OnInit {

  public id: number;
  public membersList$: Observable<Employees[]> = new Observable();
  public projectData$: Observable<Project> = new Observable();

  constructor(
    private projectService: ProjectsService,
    private commonService: CommonService,
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.id = parseInt(this.activatedRoute.snapshot.params['id']);
    if (this.id) {
      this.projectData$ = this.projectService.getProjectById(this.id);
    }
  }

  ngOnInit(): void {
    this.getMembers();
  }

  public getMembers() {
    this.membersList$ = this.commonService.getEmployees();
  }

  public addProjects(form: Project) {
    this.projectService.addProjectdata(form).subscribe(() => {
      alert('Project Added Successfully.');
      this.route.navigateByUrl('projects');
    })
  }

  public editProject(form: Project) {
    this.projectService.editProject(this.id, form).subscribe(() => {
      alert('Project Updated Successfully.');
      this.route.navigateByUrl('projects')
    })
  }
}

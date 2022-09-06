import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Users } from 'src/app/users/users.model';
import { Project } from '../project.model';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-project-form-container',
  templateUrl: './project-form-container.component.html'
})
export class ProjectFormContainerComponent implements OnInit {

  public membersList$: Observable<Users[]> = new Observable();
  public projectData$: Observable<Project[]> = new Observable();
  
  constructor(private projectService: ProjectsService, private route: Router) { }

  ngOnInit(): void {
    this.getProjects();
    this.getMembers();
  }

  public getProjects() {
    this.projectData$ = this.projectService.getProjectdata();
  }

  public getMembers() {
    this.membersList$ = this.projectService.getUsers();
  }
  
  public addProjects(form: Project) {
    this.projectService.addProjectdata(form).subscribe(() => {
      alert('Data Added Successfully');
      this.route.navigateByUrl('project-list');
    })
  }
}

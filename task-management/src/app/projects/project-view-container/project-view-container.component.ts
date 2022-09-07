import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Project, Task } from '../project.model';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-project-view-container',
  templateUrl: './project-view-container.component.html'
})
export class ProjectViewContainerComponent implements OnInit {

  private id: number;

  public projectView$: Observable<Project> = new Observable();
  public taskData$: Observable<Task[]> = new Observable();

  constructor(private projectService: ProjectsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = parseInt(this.activatedRoute.snapshot.params['id']);
    if (this.id) {
      this.projectView$ = this.projectService.getProjectById(this.id);
    }

    this.getTaskData();
  }

  public getTaskData(){
    this.taskData$=this.projectService.getTaskData();
  }
}

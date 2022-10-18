import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Project } from './project.model';

@Injectable()
export class ProjectsService {

  public apiLink: string;
  constructor(private http: HttpClient) {
    this.apiLink = environment.baseURL;
  }

  public addProjectdata(data: Project): Observable<Project> {
    return this.http.post<Project>(`${this.apiLink}/project`, data);
  }

  public getProjectById(id: number): Observable<Project> {
    return this.http.get<Project>(`${this.apiLink}/project/${id}`);
  }

  public editProject(id: number, form: Project): Observable<Project> {
    return this.http.put<Project>(`${this.apiLink}/project/${id}`, form);
  }

  public deleteProject(id: number): Observable<number> {
    return this.http.delete<number>(`${this.apiLink}/project/${id}`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Users } from '../users/users.model';
import { Project } from './project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  public apiLink: string;
  constructor(private http: HttpClient) {
    this.apiLink = environment.baseURL;
  }

  public getProjectdata(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.apiLink}/project`);
  }

  public getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(`${this.apiLink}/users`);
  }

  public addProjectdata(data: Project): Observable<Project> {
    return this.http.post<Project>(`${this.apiLink}/project`, data);
  }

  public getProjectById(id: number): Observable<Project> {
    return this.http.get<Project>(`${this.apiLink}/project/${id}`)
  }
}

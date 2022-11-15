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

  /**
   * @name addProjectdata
   * @param data 
   * @returns Observable of type Project.
   */
  public addProjectdata(data: Project): Observable<Project> {
    return this.http.post<Project>(`${this.apiLink}/project`, data);
  }

  /**
   * @name getProjectById
   * @param id 
   * @returns Observable of type Project.
   */
  public getProjectById(id: number): Observable<Project> {
    return this.http.get<Project>(`${this.apiLink}/project/${id}`);
  }

  /**
   * @name editProject
   * @param id 
   * @param form 
   * @returns Observable of type Project.
   */
  public editProject(id: number, form: Project): Observable<Project> {
    return this.http.put<Project>(`${this.apiLink}/project/${id}`, form);
  }

  /**
   * @name deleteProject
   * @param id 
   * @returns Observable of type number.
   */
  public deleteProject(id: number): Observable<number> {
    return this.http.delete<number>(`${this.apiLink}/project/${id}`);
  }
}

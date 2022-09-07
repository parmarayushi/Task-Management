import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Project, Task } from './project.model';

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

  public addProjectdata(data: Project): Observable<Project> {
    return this.http.post<Project>(`${this.apiLink}/project`, data);
  }

  public getProjectById(id: number): Observable<Project> {
    return this.http.get<Project>(`${this.apiLink}/project/${id}`)
  }

  public editProject(id:number,form:Project):Observable<Project>{
    return this.http.put<Project>(`${this.apiLink}/project/${id}`,form)
  }

  public getTaskData():Observable<Task[]>{
    return this.http.get<Task[]>(`${this.apiLink}/task`);
  }

  public addTaskData(data:Task):Observable<Task>{
    return this.http.post<Task>(`${this.apiLink}/task`,data);
  }
}

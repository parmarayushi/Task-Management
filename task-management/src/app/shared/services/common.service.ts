import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from 'src/app/projects/project.model';
import { Employees } from 'src/app/users/users.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public apiLink: string
  constructor(private http: HttpClient) {
    this.apiLink = environment.baseURL;
  }

  public getEmployees(): Observable<Employees[]> {
    return this.http.get<Employees[]>(`${this.apiLink}/employee`);
  }

  public getProjectdata(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.apiLink}/project`);
  }
}

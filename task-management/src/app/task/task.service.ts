import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  public apiLink: string;
  constructor(private http: HttpClient) {
    this.apiLink = environment.baseURL;
  }

  public getTaskData(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiLink}/task`);
  }

  public addTaskData(data: Task): Observable<Task> {
    return this.http.post<Task>(`${this.apiLink}/task`, data);
  }

  public getTaskById(id: number): Observable<Task> {
    return this.http.get<Task>(`${this.apiLink}/task/${id}`)
  }

  public editTask(id: number, form: Task): Observable<Task> {
    return this.http.put<Task>(`${this.apiLink}/task/${id}`, form)
  }

  public deleteTask(id: number): Observable<number> {
    return this.http.delete<number>(`${this.apiLink}/task/${id}`);
  }
}

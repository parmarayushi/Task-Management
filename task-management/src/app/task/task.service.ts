import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Task } from './task.model';

@Injectable()
export class TaskService {
  public apiLink: string;
  constructor(private http: HttpClient) {
    this.apiLink = environment.baseURL;
  }

  /**
   * @name getTaskData
   * @returns Observable of type task.
   */
  public getTaskData(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiLink}/task`);
  }

  /**
   * @name addTaskData
   * @param data 
   * @returns Obervable of type Task.
   */
  public addTaskData(data: Task): Observable<Task> {
    return this.http.post<Task>(`${this.apiLink}/task`, data);
  }

  /**
   * @name getTaskById
   * @param id 
   * @returns Observable of type Task.
   */
  public getTaskById(id: number): Observable<Task> {
    return this.http.get<Task>(`${this.apiLink}/task/${id}`)
  }

  /**
   * @name editTask
   * @param id 
   * @param form 
   * @returns Obervable of type Task.
   */
  public editTask(id: number, form: Task): Observable<Task> {
    return this.http.put<Task>(`${this.apiLink}/task/${id}`, form)
  }

  /**
   * @name deleteTask
   * @param id 
   * @returns Observable of type number.
   */
  public deleteTask(id: number): Observable<number> {
    return this.http.delete<number>(`${this.apiLink}/task/${id}`);
  }
}

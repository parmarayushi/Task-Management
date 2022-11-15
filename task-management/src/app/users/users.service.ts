import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employees } from './users.model';

@Injectable()
export class UsersService {

  public apiLink: string;
  constructor(private http: HttpClient) {
    this.apiLink = environment.baseURL;
  }

  /**
   * @name addEmployee
   * @param form 
   * @returns Observable of type Employee.
   */
  public addEmployee(form: Employees): Observable<Employees> {
    return this.http.post<Employees>(`${this.apiLink}/employee`, form);
  }

  /**
   * @name getEmployeeById
   * @param id 
   * @returns Observable of type Employees.
   */
  public getEmployeeById(id: number): Observable<Employees[]> {
    return this.http.get<Employees[]>(`${this.apiLink}/employee/${id}`)
  }

  /**
   * @name editEmployee
   * @param id 
   * @param form 
   * @returns Observable of type Employees.
   */
  public editEmployee(id: number, form: Employees): Observable<Employees> {
    return this.http.put<Employees>(`${this.apiLink}/employee/${id}`, form)
  }

  /**
   * @name deleteEmployee
   * @param id 
   * @returns Observable of type number.
   */
  public deleteEmployee(id: number): Observable<number> {
    return this.http.delete<number>(`${this.apiLink}/employee/${id}`);
  }

  /**
   * @name confirmPassword
   * @param password 
   * @returns boolean Value.
   */
  public confirmPassword(password: AbstractControl): { passwordsDoNotMatch: boolean } | null {
    return password.get('password')?.value !== password.get('confirmPassword')?.value
      ? { passwordsDoNotMatch: true }
      : null;
  }
}

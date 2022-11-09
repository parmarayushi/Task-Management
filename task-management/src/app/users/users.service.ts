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

  public addEmployee(form: Employees): Observable<Employees> {
    return this.http.post<Employees>(`${this.apiLink}/employee`, form);
  }

  public getEmployeeById(id: number): Observable<Employees[]> {
    return this.http.get<Employees[]>(`${this.apiLink}/employee/${id}`)
  }

  public editEmployee(id: number, form: Employees): Observable<Employees> {
    return this.http.put<Employees>(`${this.apiLink}/employee/${id}`, form)
  }

  public deleteEmployee(id: number): Observable<number> {
    return this.http.delete<number>(`${this.apiLink}/employee/${id}`);
  }

  public confirmPassword(password: AbstractControl): { passwordsDoNotMatch: boolean } | null {
    return password.get('password')?.value !== password.get('confirm_password')?.value
      ? { passwordsDoNotMatch: true }
      : null;
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserRole, Users } from './users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public apiLink: string;
  constructor(private http: HttpClient) {
    this.apiLink = environment.baseURL;
  }

  public getUserRole(): Observable<UserRole[]> {
    return this.http.get<UserRole[]>(`${this.apiLink}/userRole`)
  }

  public getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(`${this.apiLink}/users`);
  }

  public addUsers(form: Users): Observable<Users> {
    return this.http.post<Users>(`${this.apiLink}/users`, form);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { User } from '../components/login-container/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiLink: string;
  constructor(
    private _http: HttpClient,
    private _router: Router
  ) {
    this.apiLink = environment.baseURL;
  }

  public getUser(): Observable<User[]> {
    return this._http.get<User[]>(`${this.apiLink}/user`);
  }

  public logOut() {
    localStorage.removeItem('isLogin');
    this._router.navigateByUrl('login')
  }
}

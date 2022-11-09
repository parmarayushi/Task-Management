import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AuthService } from '../../services/auth.service';
import { User } from './login.model';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html'
})
export class LoginContainerComponent implements OnInit {

  public user$: Observable<User[]>
  constructor(
    private _authService: AuthService
  ) {
    this.user$ = new Observable();
  }

  ngOnInit(): void {
    this.getUser();
  }

  public getUser() {
    this.user$ = this._authService.getUser();
  }

}

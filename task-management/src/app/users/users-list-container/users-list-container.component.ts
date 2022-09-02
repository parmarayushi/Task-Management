import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { UserRole, Users } from '../users.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users-list-container',
  templateUrl: './users-list-container.component.html'
})
export class UsersListContainerComponent implements OnInit {

  public userList$: Observable<Users[]> = new Observable()
  public userRole$: Observable<UserRole[]> = new Observable();
  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.getusers();
    this.getuserRole();
  }

  public getusers() {
    this.userList$ = this.userService.getUsers();
  }

  public getuserRole() {
    this.userRole$ = this.userService.getUserRole();
  }
}

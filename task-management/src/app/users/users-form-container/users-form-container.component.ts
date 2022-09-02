import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { UserRole, Users } from '../users.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users-form-container',
  templateUrl: './users-form-container.component.html'
})
export class UsersFormContainerComponent implements OnInit {

  public userData$: Observable<Users[]> = new Observable()
  public userRole$: Observable<UserRole[]> = new Observable();

  constructor(private userService: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.getusers();
    this.getuserRole();
  }

  public getusers() {
    this.userData$ = this.userService.getUsers();
  }

  public getuserRole() {
    this.userRole$ = this.userService.getUserRole();
  }

  public addUsers(form: Users) {
    this.userService.addUsers(form).subscribe(() => {
      alert("Data Added Successfully");
      this.router.navigateByUrl('users/list')
    })
  }
}

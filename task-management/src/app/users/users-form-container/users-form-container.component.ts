import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { UserRole, Users } from '../users.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users-form-container',
  templateUrl: './users-form-container.component.html'
})
export class UsersFormContainerComponent implements OnInit {

  public id: number;
  public userData$: Observable<Users[]> = new Observable();
  public userRole$: Observable<UserRole[]> = new Observable();

  constructor(private userService: UsersService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.id = parseInt(this.activatedRoute.snapshot.params['id']);
    if (this.id) {
      this.userData$ = this.userService.getUsersById(this.id);
    }
  }

  ngOnInit(): void {
    this.getuserRole();
  }

  public getuserRole() {
    this.userRole$ = this.userService.getUserRole();
  }

  public addUsers(form: Users) {
    this.userService.addUsers(form).subscribe(() => {
      alert("Data Added Successfully");
      this.router.navigateByUrl('users-list')
    })
  }

  public editUser(form: Users) {
    this.userService.editUser(this.id, form).subscribe(() => {
      alert('Edit Successfully');
      this.router.navigateByUrl('users-list');
    })
  }
}

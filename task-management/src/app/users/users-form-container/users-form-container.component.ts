import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Employees } from '../users.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users-form-container',
  templateUrl: './users-form-container.component.html'
})
export class UsersFormContainerComponent implements OnInit {

  public id: number;
  public userData$: Observable<Employees[]> = new Observable();

  constructor(
    private userService: UsersService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.id = parseInt(this.activatedRoute.snapshot.params['id']);
    if (this.id) {
      this.userData$ = this.userService.getEmployeeById(this.id);
    }
  }

  ngOnInit(): void {
  }

  public addEmployee(form: Employees) {
    this.userService.addEmployee(form).subscribe(() => {
      alert("Employee Added Successfully.");
      this.router.navigateByUrl('users')
    })
  }

  public editEmployee(form: Employees) {
    this.userService.editEmployee(this.id, form).subscribe(() => {
      alert('Employee Updtaed Successfully.');
      this.router.navigateByUrl('users');
    })
  }
}

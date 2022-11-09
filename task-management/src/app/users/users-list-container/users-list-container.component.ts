import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { CommonService } from 'src/app/shared/services/common.service';
import { Employees } from '../users.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users-list-container',
  templateUrl: './users-list-container.component.html'
})
export class UsersListContainerComponent implements OnInit {

  public userList$: Observable<Employees[]> = new Observable()
  constructor(
    private userService: UsersService,
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
    this.getEmployee();
  }

  public getEmployee() {
    this.userList$ = this.commonService.getEmployees();
  }

  public deleteEmployee(id: number) {
    this.userService.deleteEmployee(id).subscribe(() => {
      alert('User Deleted.')
      this.getEmployee();
    })
  }
}

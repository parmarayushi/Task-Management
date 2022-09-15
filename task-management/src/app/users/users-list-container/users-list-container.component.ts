import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { CommonService } from 'src/app/shared/services/common.service';
import { Users } from '../users.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users-list-container',
  templateUrl: './users-list-container.component.html'
})
export class UsersListContainerComponent implements OnInit {

  public userList$: Observable<Users[]> = new Observable()
  constructor(private userService: UsersService, private commonService: CommonService) { }

  ngOnInit(): void {
    this.getusers();
  }

  public getusers() {
    this.userList$ = this.commonService.getUsers();
  }

  public deleteUsers(id: number) {
    this.userService.deleteUsers(id).subscribe(() => {
      this.getusers();
    })
  }
}

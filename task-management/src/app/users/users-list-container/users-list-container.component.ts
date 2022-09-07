import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { CommonService } from 'src/app/shared/services/common.service';
import { UserRole, Users } from '../users.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users-list-container',
  templateUrl: './users-list-container.component.html'
})
export class UsersListContainerComponent implements OnInit {

  public userList$: Observable<Users[]> = new Observable()
  public userRole$: Observable<UserRole[]> = new Observable();
  constructor(private userService: UsersService,private commonService:CommonService) { }

  ngOnInit(): void {
    this.getusers();
    this.getuserRole();
  }

  public getusers() {
    this.userList$ = this.commonService.getUsers();
  }

  public getuserRole() {
    this.userRole$ = this.userService.getUserRole();
  }

  public deleteUsers(id:number){
    this.userService.deleteUsers(id).subscribe(()=>{
      alert('Employee with id ' +id +' deleted');
      this.getusers();
    })
  }
}

import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { UserRole, Users } from '../../users.model';
import { UsersListPresenterService } from '../users-list-presenter/users-list-presenter.service';

@Component({
  selector: 'app-users-list-presentation',
  templateUrl: './users-list-presentation.component.html',
  viewProviders: [UsersListPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListPresentationComponent implements OnInit {

  @Input() public set userList(value: Users[] | null) {
    if (value) {
      this._userList = value;
    }
  }

  public get userList(): Users[] {
    return this._userList;
  }

  @Input() public set userRoles(value: UserRole[] | null) {
    if (value) {
      this._userRoles = value;
    }
  }

  public get userRoles(): UserRole[] {
    return this._userRoles;
  }

  private _userList!: Users[];
  private _userRoles!: UserRole[];

  constructor() { }

  ngOnInit(): void {
  }

}

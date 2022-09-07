import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
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

  @Output() public delete: EventEmitter<number>;

  private _userList: Users[];
  private _userRoles: UserRole[];

  constructor(private route: Router, private userListPresenter: UsersListPresenterService) {
    this.delete = new EventEmitter();
  }

  ngOnInit(): void {
    this.userListPresenter.deleteData$.subscribe((result: number) => {
      this.delete.emit(result);
    })
  }

  public onEdit(id: number) {
    this.route.navigateByUrl(`users-form/edit/${id}`)
  }

  public onDelete(id: number) {
    this.userListPresenter.onDelete(id);
  }
}

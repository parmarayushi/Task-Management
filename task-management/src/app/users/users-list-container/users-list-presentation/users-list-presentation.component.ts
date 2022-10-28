import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../../users.model';
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
      if (!this._newUserList) {
        this._newUserList = value;
        this.changePage(this._newUserList.slice(0, 4))
      }
      this._userList = value;
    }
  }

  public get userList(): Users[] {
    return this._userList;
  }

  @Output() public delete: EventEmitter<number>;

  public searchText: string;
  public newUser: Users[];

  private _userList: Users[];
  private _newUserList: Users[];

  constructor(
    private route: Router,
    private userListPresenter: UsersListPresenterService
  ) {
    this.delete = new EventEmitter();
    this.searchText = ''
  }

  ngOnInit(): void {
    this.userListPresenter.deleteData$.subscribe((result: number) =>
      this.delete.emit(result)
    )
  }

  public onEdit(id: number) {
    this.route.navigateByUrl(`users/edit/${id}`)
  }

  public onDelete(id: number) {
    this.userListPresenter.deletePopUp(id);
  }

  public changePage(userList: Users[]) {
    this.newUser = userList;
  }
}

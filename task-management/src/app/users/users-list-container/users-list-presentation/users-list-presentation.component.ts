import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UtilityService } from 'src/app/shared/services/utility.service';
import { Employees } from '../../users.model';
import { UsersListPresenterService } from '../users-list-presenter/users-list-presenter.service';

@Component({
  selector: 'app-users-list-presentation',
  templateUrl: './users-list-presentation.component.html',
  viewProviders: [UsersListPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListPresentationComponent implements OnInit {

  @Input() public set userList(value: Employees[] | null) {
    if (value) {
      if (!this._newUserList) {
        this._newUserList = value;
        this.changePage(this._newUserList.slice(0, 4))
      }
      this._userList = value;
    }
  }

  public get userList(): Employees[] {
    return this._userList;
  }

  @Output() public delete: EventEmitter<number>;

  public searchText: string;
  public newUser: Employees[];

  private _userList: Employees[];
  private _newUserList: Employees[];

  constructor(
    private route: Router,
    private userListPresenter: UsersListPresenterService,
    private utilityService: UtilityService
  ) {
    this.delete = new EventEmitter();
    this.searchText = ''
  }

  ngOnInit(): void {
    this.userListPresenter.deleteData$.subscribe((result: number) =>
      this.delete.emit(result)
    )

    this.utilityService.searchData$.subscribe((res) => {
      this._userList = res;
    })
  }

  public onEdit(id: number) {
    this.route.navigateByUrl(`users/edit/${id}`)
  }

  public onDelete(id: number) {
    this.userListPresenter.deletePopUp(id);
  }

  public onSearch() {
    this.utilityService.onFilter(this._newUserList, this.searchText)
  } 

  public changePage(userList: Employees[]) {
    this.newUser = userList;
  }
}

import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
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

  /**
   * @name userList
   * @description sets the list.
   */
  @Input() public set userList(value: Employees[] | null) {
    if (value) {
      if (!this._newUserList) {
        this._newUserList = value;
      }
      this._userList = value;
    }
  }

  /**
   * @name userList
   * @description gets the list of employees.
   */
  public get userList(): Employees[] {
    return this._userList;
  }

  @Output() public delete: EventEmitter<number>;

  @HostListener('window:resize', ['$event'])
  public onResize(event: any) {
    this.innerWidth = window.innerWidth;
    this.innerWidth >= 576 ? (this.isTableView = true, this.isCardView = false) : (this.isTableView = false, this.isCardView = true);
  }
  
  public searchText: string;
  public newUser: Employees[];
  public isTableView: boolean;
  public isCardView: boolean;
  public innerWidth: number;

  private _userList: Employees[];
  private _newUserList: Employees[];

  constructor(
    private userListPresenter: UsersListPresenterService,
    private utilityService: UtilityService,
    private cdr:ChangeDetectorRef
  ) {
    this.delete = new EventEmitter();
    this.searchText = '';
    this.isTableView = false;
    this.isCardView = false;
  }

  ngOnInit(): void {
    this.onResize(event);

    this.userListPresenter.deleteData$.subscribe((result: number) =>
      this.delete.emit(result)
    )

    this.utilityService.searchData$.subscribe((res) => {
      this._userList = res;
    })
  }

  /**
   * @name onDelete
   * @param id 
   * @description deletes the record on click of button.
   */
  public onDelete(id: number) {
    this.userListPresenter.deletePopUp(id);
  }

  /**
   * @name onSearch
   * @description searches data from the list.
   */
  public onSearch() {
    this.utilityService.search(this._newUserList, this.searchText)
  }

  /**
   * @name changePage
   * @param userList 
   * @description changes list on click of numbers in pagination.
   */
  public changePage(userList: Employees[]) {
    this.newUser = userList;
    this.cdr.detectChanges();
  }
}

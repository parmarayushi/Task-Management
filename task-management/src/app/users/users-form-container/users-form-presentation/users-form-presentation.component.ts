import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserRole, Users } from '../../users.model';
import { UsersFormPresnterService } from '../users-form-presenter/users-form-presnter.service';

@Component({
  selector: 'app-users-form-presentation',
  templateUrl: './users-form-presentation.component.html',
  viewProviders: [UsersFormPresnterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersFormPresentationComponent implements OnInit {

  @Input() public set userData(value: Users[] | null) {
    if (value) {
      this._userFormData = value
    }
  }

  public get userData(): Users[] | null {
    return this._userFormData;
  }

  @Input() public set userRole(value: UserRole[] | null) {
    if (value) {

      this._userRole = value
    }
  }

  public get userRole(): UserRole[] | null {
    return this._userRole;
  }

  @Output() public add: EventEmitter<Users>;

  public usersForm: FormGroup;

  private _userFormData!: Users[];
  private _userRole!: UserRole[];

  constructor(private userFormPresenter: UsersFormPresnterService) {
    this.usersForm = this.userFormPresenter.buildForm();
    this.add = new EventEmitter();
  }

  ngOnInit(): void {
    this.userFormPresenter.userFormdata$.subscribe((result) => {
      this.add.emit(result);
    })
  }

  public onSubmit() {
    this.userFormPresenter.onSubmit(this.usersForm);
  }

  public onCancel() {
    this.usersForm.reset();
  }
}

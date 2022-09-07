import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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
      this.formTitle = "Edit Employee"
      this.usersForm.patchValue(value)
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
  @Output() public edit: EventEmitter<Users>;

  public usersForm: FormGroup;
  public formTitle: string

  private _userFormData: Users[];
  private _userRole: UserRole[];

  constructor(private userFormPresenter: UsersFormPresnterService, private route: Router) {
    this.usersForm = this.userFormPresenter.buildForm();
    this.formTitle = "New Employee";
    this.add = new EventEmitter();
    this.edit = new EventEmitter();
  }

  ngOnInit(): void {
    this.userFormPresenter.userFormdata$.subscribe((result: Users) => {
      this.formTitle === "New Employee" ? this.add.emit(result) : this.edit.emit(result);
    })
  }

  public onSubmit() {
    this.userFormPresenter.onSubmit(this.usersForm);
  }

  public onCancel() {
    this.route.navigateByUrl('users-list')
  }
}

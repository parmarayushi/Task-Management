import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';
import { EMAIL_PATTERN, NAME_PATTERN, PASSWORD_PATTERN } from 'src/app/shared/constants';
import { Employees } from '../../users.model';
import { UsersService } from '../../users.service';

@Injectable()
export class UsersFormPresnterService {

  private userFormData: Subject<Employees>;
  public userFormdata$: Observable<Employees>;

  constructor(
    private fb: FormBuilder,
    private userService: UsersService
  ) {
    this.userFormData = new Subject();
    this.userFormdata$ = new Observable();

    this.userFormdata$ = this.userFormData.asObservable();
  }

  public buildForm() {
    return this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern(NAME_PATTERN)]],
      lastName: ['', [Validators.required, Validators.pattern(NAME_PATTERN)]],
      city: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.pattern(EMAIL_PATTERN)]],
      password: this.fb.group({
        password: ['', [Validators.required, Validators.pattern(PASSWORD_PATTERN), Validators.minLength(8), Validators.maxLength(12)]],
        confirmPassword: ['', [Validators.required]],
      }, { validator: this.userService.confirmPassword }),
    })
  }

  public onSubmit(userForm: FormGroup) {
    this.userFormData.next(userForm.value)
  }
}

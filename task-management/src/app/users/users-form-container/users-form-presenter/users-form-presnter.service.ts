import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';
import { Users } from '../../users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersFormPresnterService {

  private userFormData: Subject<Users>;
  public userFormdata$: Observable<Users>;

  constructor(private fb: FormBuilder) {
    this.userFormData = new Subject();
    this.userFormdata$ = new Observable();

    this.userFormdata$ = this.userFormData.asObservable();
  }

  public buildForm() {
    return this.fb.group({
      firstName: [''],
      lastName: [''],
      userRole: [''],
      email: [''],
      password: [''],
      confirmPassword: [''],
    })
  }

  public onSubmit(userForm: FormGroup) {
    this.userFormData.next(userForm.value)
  }
}

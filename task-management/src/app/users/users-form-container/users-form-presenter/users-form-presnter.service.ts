import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      city: ['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
      password: ['',Validators.required],
      confirmPassword: ['',Validators.required],
    })
  }

  public onSubmit(userForm: FormGroup) {
    this.userFormData.next(userForm.value)
  }
}

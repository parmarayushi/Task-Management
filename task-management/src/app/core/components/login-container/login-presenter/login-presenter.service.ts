import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginPresenterService {

  public currentUser: any;
  constructor(
    private _fb: FormBuilder,
    private _route: Router,
  ) { }

  public buildForm() {
    return this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  public onLogin(formData: FormGroup, user: User[]) {
    this.currentUser = user.find((res: User) => res.email === formData.value.email && res.password === formData.value.password)
    if (!this.currentUser) {
      alert("Unvalid Email or Password");
    }
    if (formData.valid && this.currentUser) {
      localStorage.setItem('isLogin', "1")
      this._route.navigateByUrl('dashboard');
    }
  }
}

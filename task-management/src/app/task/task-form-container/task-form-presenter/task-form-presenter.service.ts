import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { Task } from '../../task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskFormPresenterService {

  private taskFormData: Subject<Task>;
  public taskFormData$: Observable<Task>;
  constructor(private fb: FormBuilder) {
    this.taskFormData = new Subject();
    this.taskFormData$ = new Observable();

    this.taskFormData$ = this.taskFormData.asObservable();
  }

  public buildForm() {
    return this.fb.group({
      projectName: ['',Validators.required],
      task: ['',Validators.required],
      description: ['',Validators.required],
      assignTo: ['',Validators.required],
      priority:['',Validators.required],
      dueDate: ['',Validators.required],
      status: ['',Validators.required],
    })
  }

  onSubmit(taskForm: FormGroup) {
    this.taskFormData.next(taskForm.value);
  }
}


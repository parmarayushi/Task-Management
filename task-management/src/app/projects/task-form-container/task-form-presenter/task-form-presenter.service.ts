import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { Task } from '../../project.model';

@Injectable({
  providedIn: 'root'
})
export class TaskFormPresenterService {

  private taskFormData:Subject<Task>;
  public taskFormData$:Observable<Task>;

  constructor(private fb:FormBuilder) { 
    this.taskFormData=new Subject();
    this.taskFormData$=new Observable();

    this.taskFormData$=this.taskFormData.asObservable();
  }

  public buildform() {
    return this.fb.group({
      task: [''],
      description: [''],
      status: ['']
    })
  }

  onSubmit(taskForm:FormGroup){
    this.taskFormData.next(taskForm.value);
  }
}

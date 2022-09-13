import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { Project } from '../../project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectFormPresenterService {

  private projectFormData: Subject<Project>;
  public projectFormData$: Observable<Project>;

  constructor(private fb: FormBuilder) {
    this.projectFormData = new Subject();
    this.projectFormData$ = new Observable();

    this.projectFormData$ = this.projectFormData.asObservable();
  }

  public buildform() {
    return this.fb.group({
      name: ['',Validators.required],
      status: ['',Validators.required],
      startDate: ['',Validators.required],
      dueDate: ['',Validators.required],
      projectManager: ['',Validators.required],
      teamMembers: ['',Validators.required],
      description: ['',Validators.required]
    })
  }

  onSubmit(projectForm: FormGroup) {
    this.projectFormData.next(projectForm.value);
  }
}

import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
      name: [''],
      status: [''],
      startDate: [''],
      endDate: [''],
      projectManager: [''],
      teamMembers: [''],
      description: ['']
    })
  }

  onSubmit(projectForm: FormGroup) {
    this.projectFormData.next(projectForm.value);
  }
}

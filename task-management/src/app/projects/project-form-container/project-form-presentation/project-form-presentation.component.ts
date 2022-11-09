import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Employees } from 'src/app/users/users.model';
import { Project } from '../../project.model';
import { ProjectFormPresenterService } from '../project-form-presenter/project-form-presenter.service';

@Component({
  selector: 'app-project-form-presentation',
  templateUrl: './project-form-presentation.component.html',
  viewProviders: [ProjectFormPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectFormPresentationComponent implements OnInit {

  @Input() public set projectData(value: Project | null) {
    if (value) {
      this.formTitle = "Edit Project"
      this.projectForm.patchValue(value)
      this._projectData = value;
    }
  }

  public get projectData(): Project | null {
    return this._projectData;
  }

  @Input() public set teamMembers(value: Employees[] | null) {
    if (value) {
      this._teamMembers = value;
    }
  }

  public get teamMembers(): Employees[] {
    return this._teamMembers;
  }

  @Output() public add: EventEmitter<Project>;
  @Output() public edit: EventEmitter<Project>;

  public projectForm: FormGroup;
  public formTitle: string;
  public formSubmitted: boolean;
  public settings: {};

  private _projectData: Project;
  private _teamMembers: Employees[];

  constructor(
    private projectFormPresenter: ProjectFormPresenterService,
    private route: Router
  ) {
    this.projectForm = this.projectFormPresenter.buildform();
    this.add = new EventEmitter();
    this.edit = new EventEmitter();
    this.formTitle = "New Project";
    this.formSubmitted = false;
  }

  ngOnInit(): void {
    this.projectFormPresenter.projectFormData$.subscribe((data) => 
      this.formTitle === "New Project" ? this.add.emit(data) : this.edit.emit(data)
    )

    this.settings = {
      singleSelection: false,
      idField: 'id',
      textField: 'firstName',
      selectAllText: 'Select All',
      unSelectAllText: 'Unselect All',
      allowSearchFilter: true,
      searchPlaceholderText: 'Search Here',
      closeDropDownOnSelection: false,
      showSelectedItemsAtTop: false,
      defaultOpen: false,
    }
  }

  public get getControls() {
    return this.projectForm.controls;
  }

  public onSubmit() {
    this.formSubmitted = !this.projectForm.valid;
    if (!this.formSubmitted) {
      this.projectFormPresenter.onSubmit(this.projectForm);
    }
  }

  public onCancel() {
    this.route.navigateByUrl('projects')
  }

}

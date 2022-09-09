import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../../project.model';
import { ProjectListPresenterService } from '../project-list-presenter/project-list-presenter.service';

@Component({
  selector: 'app-project-list-presentation',
  templateUrl: './project-list-presentation.component.html',
  viewProviders: [ProjectListPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectListPresentationComponent implements OnInit {

  @Input() public set projectList(value: Project[] | null) {
    if (value) {
      this._projectList = value
    }
  }

  public get projectList(): Project[] {
    return this._projectList
  }

  @Input() public set projectView(value: Project | null) {
    if (value) {
      this._projectView = value
    }
  }

  public get projectView(): Project {
    return this._projectView;
  }

  private _projectView: Project;
  @Output() public delete: EventEmitter<number>;

  private _projectList: Project[];

  constructor(public route: Router, private projectPresenterservice: ProjectListPresenterService) {
    this.delete = new EventEmitter();
  }

  ngOnInit(): void {
    this.projectPresenterservice.deleteData$.subscribe((result: number) => {
      this.delete.emit(result);
    })
  }

  public onView(id: number) {
    this.route.navigateByUrl(`project-view/${id}`)
  }

  public onEdit(id: number) {
    this.route.navigateByUrl(`project-form/edit/${id}`)
  }

  public onDelete(id: number) {
    this.projectPresenterservice.onDelete(id);
  }
}

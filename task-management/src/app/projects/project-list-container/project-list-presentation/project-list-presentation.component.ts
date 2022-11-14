import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UtilityService } from 'src/app/shared/services/utility.service';
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
      if (!this._newProjectList) {
        this._newProjectList = value;
      }
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

  @Output() public delete: EventEmitter<number>;
  @HostListener('window:resize', ['$event'])
  public onResize(event: any) {
    this.innerWidth = window.innerWidth;
    this.innerWidth >= 576 ? (this.isTableView = true, this.isCardView = false) : (this.isTableView = false, this.isCardView = true);
  }

  public searchText: string;
  public newProject: Project[];
  public isTableView: boolean;
  public isCardView: boolean;
  public innerWidth: number;

  private _projectList: Project[];
  private _newProjectList: Project[];
  private _projectView: Project;

  constructor(
    public route: Router,
    private projectPresenterservice: ProjectListPresenterService,
    private utilityService: UtilityService,
    private cdr:ChangeDetectorRef
  ) {
    this.delete = new EventEmitter();
    this.searchText = '';
    this.isTableView = false;
    this.isCardView = false;
  }

  ngOnInit(): void {
    this.onResize(event);

    this.projectPresenterservice.deleteData$.subscribe((result: number) =>
      this.delete.emit(result)
    )
    this.utilityService.searchData$.subscribe((res) => {
      this._projectList = res
    })
  }

  public onView(id: number) {
    this.route.navigateByUrl(`projects/view/${id}`)
  }

  public onEdit(id: number) {
    this.route.navigateByUrl(`projects/edit/${id}`)
  }

  public onDelete(id: number) {
    this.projectPresenterservice.deletePopUp(id);
  }

  public onSearch() {
    this.utilityService.search(this._newProjectList, this.searchText)
  }

  public changePage(projectList: Project[]) {
    this.newProject = projectList;
    this.cdr.detectChanges();
  }
}

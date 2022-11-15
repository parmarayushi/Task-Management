import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
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

  /**
   * @name projectList
   * @description sets the list.
   */
  @Input() public set projectList(value: Project[] | null) {
    if (value) {
      if (!this._newProjectList) {
        this._newProjectList = value;
      }
      this._projectList = value
    }
  }

  /**
   * @name projectList
   * @description get the list of project.
   */
  public get projectList(): Project[] {
    return this._projectList
  }

  /**
   * @name projectView
   * @description sets the value to view.
   */
  @Input() public set projectView(value: Project | null) {
    if (value) {
      this._projectView = value
    }
  }

  /**
   * @name projectView
   * @description gets the value of project to vie.
   */
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

  /**
   * @name onDelete
   * @param id 
   * @description deletes the record on click.
   */
  public onDelete(id: number) {
    this.projectPresenterservice.deletePopUp(id);
  }

  /**
   * @name onSearch
   * @description searches data from the list.
   */
  public onSearch() {
    this.utilityService.search(this._newProjectList, this.searchText)
  }

  /**
   * @name changePage
   * @param projectList 
   * @description changes the list on click of numbers in pagination.
   */
  public changePage(projectList: Project[]) {
    this.newProject = projectList;
    this.cdr.detectChanges();
  }
}

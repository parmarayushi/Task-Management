import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ProjectViewContainerComponent } from '../../project-view-container/project-view-container.component';

@Injectable({
  providedIn: 'root'
})
export class ProjectListPresenterService {

  private deleteData: Subject<number>;
  public deleteData$: Observable<number>;

  constructor(private overlay:Overlay) {
    this.deleteData = new Subject();
    this.deleteData$ = new Observable();

    this.deleteData$ = this.deleteData.asObservable();
  }

  public onDelete(id: number) {
    this.deleteData.next(id);
  }

  public openTaskModel(){
    const OverlayConfig = this.overlay.create({
      hasBackdrop:true,
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically()
    })
    const component = new ComponentPortal(ProjectViewContainerComponent)
    const componentRef = OverlayConfig.attach(component)

    OverlayConfig.backdropClick().subscribe(() => {
      OverlayConfig.detach();
    });
  }

  
}

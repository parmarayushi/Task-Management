import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';
import { DeletePopupComponent } from 'src/app/shared/component/delete-popup/delete-popup.component';

@Injectable()
export class TaskListPresenterService {

  private deleteData: Subject<number>;
  public deleteData$: Observable<number>;

  constructor(private overlay: Overlay) {
    this.deleteData = new Subject();
    this.deleteData$ = new Observable();

    this.deleteData$ = this.deleteData.asObservable();
  }

  public onDelete(id: number) {
    this.deleteData.next(id);
  }

  public deletePopUp(id: number) {
    const config = this.overlay.create({
      hasBackdrop: true,
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically()
    })

    const component = new ComponentPortal(DeletePopupComponent)
    const componentRef = config.attach(component)

    componentRef.instance.value.subscribe((result) => {
      if (result) {
        this.onDelete(id);
        config.detach();
      }
      else {
        config.detach();
      }
    })

    config.backdropClick().subscribe(() => {
      config.detach();
    })
  }
}

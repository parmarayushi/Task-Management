import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { TaskFormContainerComponent } from '../../task-form-container/task-form-container.component';

@Injectable()
export class ProjectViewPresenterService {

  constructor(private overlay:Overlay) { }
  public openTaskModel(){
    const OverlayConfig = this.overlay.create({
      hasBackdrop:true,
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically()
    })
    const component = new ComponentPortal(TaskFormContainerComponent)
    const componentRef = OverlayConfig.attach(component)

    OverlayConfig.backdropClick().subscribe(() => {
      OverlayConfig.detach();
    });
  }
}

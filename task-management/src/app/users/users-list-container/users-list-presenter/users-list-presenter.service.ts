import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { DeletePopupComponent } from 'src/app/shared/component/delete-popup/delete-popup.component';

@Injectable()
export class UsersListPresenterService {

  private deleteData: Subject<number>;
  public deleteData$: Observable<number>;

  // private filterData: Subject<Users[]>;
  // public filterData$: Observable<Users[]>;

  constructor(private overlay: Overlay) {
    this.deleteData = new Subject();
    this.deleteData$ = new Observable();

    this.deleteData$ = this.deleteData.asObservable();

    // this.filterData = new Subject();
    // this.filterData$ = new Observable();

    // this.filterData$ = this.filterData.asObservable();
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

  // public onFilter(currentList: Users[], searchText: string) {
  //   let dataKey = Object.keys(currentList[0]);
  //   let newData = [...currentList];
  //   dataKey.forEach((item: any) => {
  //     if (item) {
  //       newData = newData.filter((data: any) => {
  //         return dataKey.some(key =>{
  //           return String(data[key]).toLowerCase().includes(searchText.toLowerCase())      
  //         });
  //       })
  //       this.filterData.next(newData);
  //     }
  //   })
  // }
}

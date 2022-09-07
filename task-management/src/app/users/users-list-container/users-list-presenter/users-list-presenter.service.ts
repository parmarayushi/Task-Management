import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersListPresenterService {

  private deleteData:Subject<number>;
  public deleteData$:Observable<number>;
  constructor() { 
    this.deleteData=new Subject();
    this.deleteData$=new Observable();

    this.deleteData$=this.deleteData.asObservable();
  }

  public onDelete(id:number){
    this.deleteData.next(id);
  }
}

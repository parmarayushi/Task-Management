import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class TaskListPresenterService {

  private deleteData: Subject<number>;
  public deleteData$: Observable<number>;

  constructor() {
    this.deleteData = new Subject();
    this.deleteData$ = new Observable();

    this.deleteData$ = this.deleteData.asObservable();
  }

  public onDelete(id: number) {
    this.deleteData.next(id);
  }
}

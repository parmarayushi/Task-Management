import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  private searchData: Subject<any>;
  public searchData$: Observable<any>;

  constructor() {
    this.searchData = new Subject();
    this.searchData$ = new Observable();

    this.searchData$ = this.searchData.asObservable();
  }

  public search(currentList: any, searchText: string) {
    let dataKey = Object.keys(currentList[0]);
    let newData = [...currentList];
    dataKey.forEach((item: any) => {
      if (item) {
        newData = newData.filter((data: any) => {
          return dataKey.some(key => {
            return String(data[key]).toLowerCase().includes(searchText.toLowerCase())
          });
        })
        this.searchData.next(newData);
      }
    })
  }
}

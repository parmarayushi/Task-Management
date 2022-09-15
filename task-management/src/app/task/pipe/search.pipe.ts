import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../task.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: Task[], searchText: string): Task[] {
    if (searchText === "") {
      return value;
    }
    return value.filter((result: Task) => {
      let search = (result.projectName.toLowerCase().match(searchText.toLowerCase())) || (result.assignTo.toLowerCase().match(searchText.toLowerCase())) || (result.priority.toLowerCase().match(searchText.toLowerCase())) || (result.status.toLowerCase().match(searchText.toLowerCase()));
      return search;
    })
  }
}

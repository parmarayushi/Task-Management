import { Pipe, PipeTransform } from '@angular/core';
import { Project } from '../project.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: Project[], searchText: string): Project[] {
    if (searchText === "") {
      return value;
    }
    return value.filter((result: Project) => {
      let search = (result.name.toLowerCase().match(searchText.toLowerCase())) || (result.status.toLowerCase().match(searchText.toLowerCase()));
      return search;
    })
  }
}

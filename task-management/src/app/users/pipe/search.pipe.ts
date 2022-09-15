import { Pipe, PipeTransform } from '@angular/core';
import { Users } from '../users.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: Users[], searchText: string): Users[] {
    if (searchText === "") {
      return value;
    }
    return value.filter((result: Users) => {
      let search = (result.firstName.toLowerCase().match(searchText.toLowerCase())) || (result.lastName.toLowerCase().match(searchText.toLowerCase())) || (result.city.toLowerCase().match(searchText.toLowerCase()));
      return search;
    })
  }
}

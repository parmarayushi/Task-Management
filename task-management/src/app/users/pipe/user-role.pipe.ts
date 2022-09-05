import { Pipe, PipeTransform } from '@angular/core';
import { UserRole } from '../users.model';

@Pipe({
  name: 'userRole'
})
export class UserRolePipe implements PipeTransform {

  transform(value: number, role: UserRole[] ): string {
    let name:string=""
    role?.find((data)=>{
      if(data.id == value){
        name=data.role
      }
    })
    return name;
  }
}

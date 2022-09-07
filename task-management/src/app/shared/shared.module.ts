import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonService } from './services/common.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    CommonService
  ]
})
export class SharedModule { }

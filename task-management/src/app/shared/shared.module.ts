import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonService } from './services/common.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[
    CommonService
  ],
  exports:[
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonService } from './services/common.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import { DeletePopupComponent } from './component/delete-popup/delete-popup.component';



@NgModule({
  declarations: [
  
    DeletePopupComponent
  ],
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
    NgMultiSelectDropDownModule,
    DeletePopupComponent
  ]
})
export class SharedModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { DeletePopupComponent } from './component/delete-popup/delete-popup.component';
import { PaginationComponent } from './component/pagination/pagination.component';
import { SearchTextPipe } from './pipes/search-text.pipe';
import { HttpClientModule } from '@angular/common/http';
import { CommonService } from './services/common.service';



@NgModule({
  declarations: [
    DeletePopupComponent,
    SearchTextPipe,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CommonService
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule,
    DeletePopupComponent,
    SearchTextPipe,
    PaginationComponent,
    HttpClientModule
  ]
})
export class SharedModule { }

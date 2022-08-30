import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterComponent } from './master/master.component';
import { SidebarComponent } from './master/sidebar/sidebar.component';
import { HeaderComponent } from './master/header/header.component';
import { FooterComponent } from './master/footer/footer.component';



@NgModule({
  declarations: [
    MasterComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SidebarComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }

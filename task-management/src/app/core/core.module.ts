import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { LoginContainerComponent } from './components/login-container/login-container.component';
import { LoginPresentationComponent } from './components/login-container/login-presentation/login-presentation.component';
import { HeaderComponent } from './components/master/header/header.component';
import { MasterComponent } from './components/master/master.component';
import { SidebarComponent } from './components/master/sidebar/sidebar.component';



@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    MasterComponent,
    LoginContainerComponent,
    LoginPresentationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports:[
    SidebarComponent,
    HeaderComponent,
    MasterComponent
  ]
})
export class CoreModule { }

import { Component, OnInit } from '@angular/core';
import { User } from '../login-container/login.model';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html'
})
export class MasterComponent implements OnInit {

  public isSidebarOpen: boolean;
  
  constructor() {
    this.isSidebarOpen = false;
  }

  ngOnInit(): void {
   
  }

}

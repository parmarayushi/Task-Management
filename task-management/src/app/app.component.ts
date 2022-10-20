import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task-management';

  public isSidebarOpen: boolean;
  
  constructor() {
    this.isSidebarOpen = false;
  }
}

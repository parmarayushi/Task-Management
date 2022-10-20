import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {

  @Output() public closeSidebar: EventEmitter<Event>;
  constructor() {
    this.closeSidebar = new EventEmitter();
  }

  ngOnInit(): void {

  }
  public onRouteChange(event: MouseEvent) {
    this.closeSidebar.emit(event);
  }
}

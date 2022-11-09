import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  @Output() public closeSidebar: EventEmitter<Event>;
  constructor(
    private _authService: AuthService
  ) {
    this.closeSidebar = new EventEmitter();
  }

  ngOnInit(): void {

  }
  public onRouteChange(event: MouseEvent) {
    this.closeSidebar.emit(event);
  }

  public logOut() {
    this._authService.logOut();
  }
}

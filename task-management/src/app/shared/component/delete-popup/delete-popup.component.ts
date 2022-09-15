import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete-popup',
  templateUrl: './delete-popup.component.html',
  styleUrls: ['./delete-popup.component.scss']
})
export class DeletePopupComponent implements OnInit {

  @Output() value: EventEmitter<boolean>;
  constructor() {
    this.value = new EventEmitter<boolean>();
  }

  ngOnInit(): void {
  }

  public close(value: boolean) {
    this.value.emit(value);
  }
}

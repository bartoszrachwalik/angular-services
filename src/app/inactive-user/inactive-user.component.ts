import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-inactive-user',
  templateUrl: './inactive-user.component.html',
  styleUrls: ['./inactive-user.component.css']
})
export class InactiveUserComponent implements OnInit {
  @Input() users: string[];
  @Output() userSetToActive = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }

  onSetToActive(id: number) {
    this.userSetToActive.emit(id);
  }
}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-active-user',
  templateUrl: './active-user.component.html',
  styleUrls: ['./active-user.component.css']
})
export class ActiveUserComponent implements OnInit {
  @Input() users: string[];
  @Output() userSetToInactive = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }

  onSetToInactive(id: number) {
    this.userSetToInactive.emit(id);
  }
}

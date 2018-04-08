import {Component, Input, OnInit} from '@angular/core';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-active-user',
  templateUrl: './active-user.component.html',
  styleUrls: ['./active-user.component.css']
})
export class ActiveUserComponent implements OnInit {
  @Input() users: string[];

  constructor(private userService: UsersService) {
  }

  ngOnInit() {
  }

  onSetToInactive(id: number) {
    this.userService.setToInactive(id);
  }
}

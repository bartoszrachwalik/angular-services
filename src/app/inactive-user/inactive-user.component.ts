import {Component, Input, OnInit} from '@angular/core';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-inactive-user',
  templateUrl: './inactive-user.component.html',
  styleUrls: ['./inactive-user.component.css']
})
export class InactiveUserComponent implements OnInit {
  @Input() users: string[];

  constructor(private userService: UsersService) {
  }

  ngOnInit() {
  }

  onSetToActive(id: number) {
    this.userService.setToActive(id);
  }
}

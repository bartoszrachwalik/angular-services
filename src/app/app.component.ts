import {Component, OnInit} from '@angular/core';
import {AccountsService} from './accounts.service';
import {UsersService} from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  accounts: { name: string, status: string }[] = [];
  activeUsers: string[] = [];
  inactiveUsers: string[] = [];

  constructor(private accountsService: AccountsService, private usersService: UsersService) {
  }

  ngOnInit() {
    this.accounts = this.accountsService.accounts;
    this.activeUsers = this.usersService.activeUsers;
    this.inactiveUsers = this.usersService.inactiveUsers;
  }
}

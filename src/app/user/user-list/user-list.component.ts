import { Component, OnInit } from '@angular/core';
import { User } from '../user.interface';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.updateUsers();
  }

  updateUsers() {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }
}

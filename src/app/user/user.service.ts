import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User[] = [
    {
      id: 1,
      name: 'John Doe',
    },
    {
      id: 2,
      name: 'Jane Doe',
    },
  ];

  constructor() {}

  getUsers(): Observable<User[]> {
    // retorna um Observable
    return of(this.users);
  }
}

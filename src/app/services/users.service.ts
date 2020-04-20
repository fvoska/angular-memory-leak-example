import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/user.interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  readonly #users: Array<IUser> = [{
    id: '1',
    name: 'Filip',
    birthDate: new Date('1992-06-19'),
  }, {
    id: '2',
    name: 'Vasco',
    birthDate: new Date('1524-09-05'),
  }];

  fetchAll(): Observable<Array<IUser>> {
    console.log(`Fetching users`);
    return of(this.#users);
  }

  fetch(id: string): Observable<IUser> {
    console.log(`Fetching user ${id}`);
    return of(this.#users.find((u) => u.id === id));
  }
}

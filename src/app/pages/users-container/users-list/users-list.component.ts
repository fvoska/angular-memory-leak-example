import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent {
  users$ = this.usersService.fetchAll();

  constructor(private readonly usersService: UsersService) {}
}

import { Component, ChangeDetectionStrategy, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, shareReplay } from 'rxjs/operators';
import { UsersService } from '../../../services/users.service';
import { timer } from 'rxjs';
import { IUser } from '../../../interfaces/user.interface';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDetailsComponent implements OnInit, OnDestroy {
  user$ = this.route.paramMap.pipe(switchMap((paramMap) => {
    const userId = paramMap.get('id');
    return this.userService.fetch(userId);
  }), shareReplay(1));

  age$ = this.user$.pipe(switchMap((user) => {
    return timer(0, 1000).pipe(map(() => {
      const timeAliveMs = Date.now() - user.birthDate.getTime();
      const age = timeAliveMs / 1000 / 60 / 60 / 24 / 365;
      console.info(user.name, age);
      return age;
    }));
  }));

  constructor(
    private readonly route: ActivatedRoute,
    private readonly userService: UsersService,
  ) {}

  ngOnInit() {
    console.info('Component created');
  }

  ngOnDestroy() {
    console.info('Component destroyed');
  }

  previousLink(user: IUser) {
    return ['..', parseInt(user.id, 10) - 1];
  }

  nextLink(user: IUser) {
    return ['..', parseInt(user.id, 10) + 1];
  }
}

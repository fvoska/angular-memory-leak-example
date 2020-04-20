import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../../services/users.service';
import { IUser } from '../../../interfaces/user.interface';
import { timer, Subscription } from 'rxjs';

@Component({
  selector: 'app-user-details-leaky',
  templateUrl: './user-details-leaky.component.html',
  styleUrls: ['./user-details-leaky.component.scss']
})
export class UserDetailsLeakyComponent implements OnInit, OnDestroy {
  public user: IUser;
  public age: number;
  private userSubscription: Subscription;
  private timerSubscription: Subscription;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly userService: UsersService,
    private readonly cdRef: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    console.info('Leaky component created');
    this.route.paramMap.subscribe((paramMap) => {
      const userId = paramMap.get('id');

      // this?.userSubscription?.unsubscribe();
      this.userSubscription = this.userService.fetch(userId).subscribe((user) => {
        this.user = user;

        // this?.timerSubscription?.unsubscribe();
        this.timerSubscription = timer(0, 1000).subscribe(() => {
          console.info(this.user.name, this.age);
          const timeAliveMs = Date.now() - user.birthDate.getTime();
          this.age = timeAliveMs / 1000 / 60 / 60 / 24 / 365;
          this.cdRef.detectChanges();
        });
      });
    });
  }

  ngOnDestroy() {
    console.info('Leaky component created');

    // this?.timerSubscription?.unsubscribe();
    // this?.userSubscription?.unsubscribe();
  }

  get previousLink() {
    return ['..', parseInt(this.user.id, 10) - 1];
  }

  get nextLink() {
    return ['..', parseInt(this.user.id, 10) + 1];
  }
}

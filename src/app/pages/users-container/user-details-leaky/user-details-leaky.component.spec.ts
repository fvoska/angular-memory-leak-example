import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsLeakyComponent } from './user-details-leaky.component';

describe('UserDetailsLeakyComponent', () => {
  let component: UserDetailsLeakyComponent;
  let fixture: ComponentFixture<UserDetailsLeakyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailsLeakyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsLeakyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

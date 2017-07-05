import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {UserService} from '../user.service';
import {Http,Response}  from '@angular/http';

import { UserCountComponent } from './user-count.component';

describe('UserCountComponent', () => {
  let component: UserCountComponent;
  let fixture: ComponentFixture<UserCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCountComponent ],
       providers: [UserService],
       imports:[Http,Response]
     
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

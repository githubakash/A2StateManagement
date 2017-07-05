import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './../user.service';
import { Subscription } from 'rxjs/Subscription';
import { IUser } from './../Iuser';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit, OnDestroy {

  url: string = 'src/app/ByService/user.data.json';
  subscription: Subscription;
  userlist: IUser[];
  email: string ='Akash';
  name: string = 'Agarwal';

  constructor(private _userService: UserService, private _route: Router) {
    console.log(`user service has been injected: ${this._userService}`);

  }

  ngOnInit() {

    this.subscription = this._userService.GetUser(this.url).subscribe(
      (val) => {console.log('in userlist val func'); this.userlist = val},
      (err) => console.log(err),
      () => {console.log('in userlist complete func');this._userService.userCount.emit(this.userlist.length)}
    );


  }

  showUserCount(): void {
    this._userService.userCount.emit(this.userlist.length);
    // this._route.navigate(['/usercount']);   
  }

  AddUser(): void {
   
    this.userlist.push({ "name": this.name, "email": this.email });
     console.log({ "name": this.name, "email": this.email });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

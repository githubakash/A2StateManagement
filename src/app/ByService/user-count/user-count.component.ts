import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import {UserService} from './../user.service';

@Component({
  selector: 'app-user-count',
  templateUrl: './user-count.component.html',
  styleUrls: ['./user-count.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class UserCountComponent implements OnInit {

totalUser:string;
subscription: any;
  constructor(private _userService:UserService) {
       console.log('in userCount component constructor');
         
     //this.subscription =    this._userService.userCount.subscribe(t => this.printUserCount(t));
               
   }
  //   printUserCount(input:number):void{
  //    this.totalUser = String(input);
  //   // this.totalUser.detectChanges();
  //     console.log(`total users: ${String(input)}`);
  //  }

  ngOnInit() {
    // console.log(`in userCount component ngOnInit - ${this._userService}`);
     //  console.log(`in userCount component ngOnInit - ${this._userService.userCount}`);
    this._userService.userCount.subscribe(val => this.totalUser = val );
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  

}

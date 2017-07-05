import { Injectable,EventEmitter } from '@angular/core';
import{IUser} from './Iuser';
import {Http,Response}  from '@angular/http';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/catch';

declare var call;
@Injectable()
export class UserService {

  // userCount:number;
  userCount:EventEmitter<number> =  new EventEmitter<number>();
  constructor(private _http:Http) {
     console.log(`Http service has been injected: ${this._http}`);
   }

  GetUser(url:string): Observable<IUser[]>{

       //filter list
      //return  this._http.get(url).map( r => r.json().filter((t) => t.name === 'akash1')); 
       return  this._http.get(url).map(this.getUsers); 
  }

  private getUsers(res:Response){
     let body = <IUser[]> res.json();
     console.log(`total number of users ${body.length}`);
    return body;
  }

}

import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import {TemperatureMonitorService} from '../temperature-monitor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent implements OnInit {

  //  subscription: Subscription;
    noOfTemperature:number = 0;
    displayMedian:boolean = false;
   
    constructor(private _tempService: TemperatureMonitorService) {
        console.log(`Temp service has been injected: ${this._tempService}`);

    }

    ngOnInit() {
        this._tempService.noOfTemperature.subscribe(val => this.noOfTemperature = val);
    }

    
    AddTemperature(tempeObj): void {
        // console.log('fired - ' + JSON.stringify(tt));
        // console.log(tt.temperature);
        if(this.noOfTemperature < 8){
            this._tempService.RecordTemperature(Number(tempeObj.temperature));
        }
       
    }

    RemoveTemperature(e:any):void{
        e.preventDefault();
        if(this.noOfTemperature >0){
            this._tempService.RemoveTemperature();
        }

         console.log('remove it noOfTemperature - '+ this.noOfTemperature);
 

    }


    ShowTemperatureMedian(): void {
     this.displayMedian = true;
    let val = this._tempService.GetCurrentMedian();
    console.log('fired ShowTemperatureMedian and val is - '+ val);
        this._tempService.currentMedian.emit(val);

    }

    getProgressBarWidth(){
        if(this.noOfTemperature >= 1){
            return ((100/8)*this.noOfTemperature)
        }
        else
        return 1;
       

    }

    // ngOnDestroy() {
    //     this.subscription.unsubscribe();
    // }

}
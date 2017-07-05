import { Component, OnInit } from '@angular/core';
import {TemperatureMonitorService} from '../temperature-monitor.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  
  median:number;
  constructor(private _tempService:TemperatureMonitorService) { }

  ngOnInit() {
    this._tempService.currentMedian.subscribe(val => this.median = val);
  }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }
}

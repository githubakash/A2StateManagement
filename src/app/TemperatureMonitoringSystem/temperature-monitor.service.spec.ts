import { TestBed, inject } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { TemperatureMonitorService } from './temperature-monitor.service';

describe('TemperatureMonitorService', () => {
  let temperatureMonitorService: TemperatureMonitorService;
  beforeEach(() => {
    temperatureMonitorService = new TemperatureMonitorService();
  });

describe("RecordTemperature", () => {

  it("should record passed temperature", () => {
    let TempList: number[] = [];
    temperatureMonitorService.TemperatureList = TempList;
    temperatureMonitorService.RecordTemperature(4);
      expect(TempList.length).toBe(1);

  });

});

 describe("GetCurrentMedian",() =>{
 it("should return median value from an numeric array of even element",() =>{
    let tempArr = [5, 1, -7, 7, 8, 3];
    temperatureMonitorService.TemperatureList = tempArr;
   let result =  temperatureMonitorService.GetCurrentMedian();

   expect(result).toBe(4);

 });

 it("should return median value from an numeric array of odd element",() =>{
    let tempArr = [5, 1, -7, 7, 8, 3, 9];
    temperatureMonitorService.TemperatureList = tempArr;
   let result =  temperatureMonitorService.GetCurrentMedian();
   expect(result).toBe(5);

 });

 });

});

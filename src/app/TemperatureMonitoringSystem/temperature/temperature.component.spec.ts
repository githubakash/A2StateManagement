import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TemperatureMonitorService } from '../temperature-monitor.service';
import { FormsModule } from '@angular/forms';
import { DisplayComponent } from '../display/display.component';
import { TemperatureComponent } from './temperature.component';
import { EventEmitter } from '@angular/core';
import {Observable} from 'rxjs/observable';

describe('TemperatureComponent', () => {
  let component: TemperatureComponent;
  let fixture: ComponentFixture<TemperatureComponent>;
  let mockTempratureService = {
    TemperatureList: [],
    GetCurrentMedian: () => 5,
    RecordTemperature:(input:number) => 1,
      currentMedian: new EventEmitter<number>(),
      noOfTemperature:new EventEmitter<number>()
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TemperatureComponent, DisplayComponent],
      imports: [FormsModule],
      providers: [{ provide: TemperatureMonitorService, useValue: mockTempratureService }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe("AddTemperature function", () => {
    // it('should add given temperatue', () => {

    //   component.noOfTemperature = 0;
    //   let tempObj = { temperature: "80" };
    //   component.AddTemperature(tempObj);

    //   //Assert
    //   expect(component.noOfTemperature).toBe(1);

    // });

    it('should not allow to add more than 8 temperature', () => {

      component.noOfTemperature = 8;
      let tempObj = { temperature: "70" };
      component.AddTemperature(tempObj);

      //Assert
      expect(component.noOfTemperature).toBe(8);

    });


  });

  // describe("ShowTemperatureMedian", () => {

  //   it('should return the median value', () => {
  //     //Arrange
  //     let displayComponentFixture = TestBed.createComponent(DisplayComponent);
  //      let displayComponentObj = displayComponentFixture.componentInstance;

  //     displayComponentObj.median = 0;

  //     component.ShowTemperatureMedian();

  //     expect(displayComponentObj.median).toBe(5);

  //   });

  // });

});

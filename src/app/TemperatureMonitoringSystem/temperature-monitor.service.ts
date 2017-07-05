import { Injectable,EventEmitter } from '@angular/core';

@Injectable()
export class TemperatureMonitorService {

  TemperatureList: number[] = [];
    currentMedian:EventEmitter<number> =  new EventEmitter<number>();
    noOfTemperature:EventEmitter<number> =  new EventEmitter<number>();
      constructor() { }
   
    RecordTemperature(inputTemp: number): void {

        this.TemperatureList.push(inputTemp);
        this.noOfTemperature.emit(this.TemperatureList.length);
        console.log(this.TemperatureList);

    }

     RemoveTemperature(): void {

        this.TemperatureList.pop();
        this.noOfTemperature.emit(this.TemperatureList.length);
        console.log('remove it - '+ this.TemperatureList.length);

    }

    GetCurrentMedian():number {
        try {
            
            if (this.TemperatureList.length === 0) {
                throw { name: 'EmptyArray', message: 'Array is empty' };
            }

            //Store the array length value in a variable as we are using this value in couple of places
            let inputArrLength = this.TemperatureList.length;

            if (inputArrLength === 1) {
                return this.TemperatureList[0];
            }

            if (inputArrLength > 1) {
                // Sory array element in assendening order
                this.TemperatureList.sort((x, y) => x - y);
                 console.log('sorted list - ' + this.TemperatureList);
                var midElementIndex = inputArrLength / 2;
                 console.log('midElementIndex - ' + midElementIndex);
                if ((inputArrLength % 2) === 0) {   //Array with even number of elements
                    let midElementArray = this.TemperatureList.slice(midElementIndex - 1, midElementIndex + 1);
                     console.log('midElementArray - ' + midElementArray);
                    var midElementArraySum = midElementArray.reduce(((sum, x) => sum = sum + x),0);
                     console.log('midElementArraySum - ' + midElementArraySum);
                    return (midElementArraySum / midElementArray.length);
                }
                else if ((inputArrLength % 2) !== 0) {
                    var MidIndex = Math.round(midElementIndex);
                    return this.TemperatureList[MidIndex - 1];

                }
            }

        }
        catch (err) {

            return err.message;
        }





    }

}

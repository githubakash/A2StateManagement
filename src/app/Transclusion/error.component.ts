import {Component,Input,Output}  from '@angular/core';
import {IButtonText} from './IbuttonText';

@Component({
  selector:'message-box',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
  })
export class ErrorComponent {

    @Input() header1:string = 'header from child';
    @Input() footerButtonText = <IButtonText>{"ok":"okok","cancel": "this cancel"};



}
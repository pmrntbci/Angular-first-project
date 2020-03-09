import { Component, OnInit } from '@angular/core';
import { StringMapWithRename } from '@angular/compiler/src/compiler_facade_interface';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.component.html',
  styleUrls: ['./date-time.component.css']
})
export class DateTimeComponent implements OnInit {

  dateMessage : string;

  someRandomNumber: number= 77;

  constructor() {
    
    //setInterval(function(), interval(in ms)); for calling a function after every set time period
     setInterval(()=>{
    
      let currentDate = new Date();
      this.dateMessage= currentDate.toDateString() + ' ' + currentDate.toLocaleTimeString();
    }, 1000);
  } 
  
  ngOnInit(): void {
  }
  
  multiplyTwoNumber(a: number, b: number){
    return a*b;
  } 

}

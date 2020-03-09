import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  user: any;

  @Input('name') userName: string;
  

  
  constructor() { 
       
   };
  
  
  ngOnInit(): void {
    this.user={
      name: this.userName,
      title: 'Software Developer',
      address: '1234 Main St, City, State, 100010',
      phone: [
        '123-456-7890',
        '456-456-4567',
        '789-789-7890'
      ],
      college:[
        
      ]    
    };
  }

}

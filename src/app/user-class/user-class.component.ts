import { Component, OnInit, Input } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-user-class',
  templateUrl: './user-class.component.html',
  styleUrls: ['./user-class.component.css']
})
export class UserClassComponent implements OnInit {

  constructor() { }

  isCollapsed : boolean = true;

  inputText : String ="Input Text";

  @Input('user') user : User;

  ngOnInit(): void {
    
  }

  toggleCollapse(){
    this.isCollapsed=!this.isCollapsed;
  }

}

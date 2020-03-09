import { Component } from '@angular/core';
import { User } from './user-class/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-project';

  user: User;


  constructor(){
    this.user= new User();
    this.user.name = "Foo Bar";
    this.user.designation= "OS developer";
    this.user.address="Chennai";
    this.user.phone=[ '123-123-1234',
                      '456-456-4567',
                      '789-789-7890'
      ];
  }

}

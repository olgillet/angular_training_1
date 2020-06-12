import { Component } from '@angular/core';
import { Person } from './model/person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myproject';

  thePerson = new Person('John', 'Doe', 40);

  theColor = 'blue';
  theValue = 'red';

  changeName(){
    this.thePerson.setLastName('Dutter');
  }

  changeColor(){
    this.theColor = this.theValue;
    console.log('Color ', this.theValue);
    console.log('Color ', this.theColor);
  }
}

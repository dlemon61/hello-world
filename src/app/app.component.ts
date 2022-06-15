import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-assignment';
  hello: string = 'Hello World!';
  name: string = 'Donna';

  setName(newName:string) {
    this.name=newName;
  } 
}

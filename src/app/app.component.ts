import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myresume';
  name="Shizuka";
  student={
    "rno" :1,"name" : "Nobita",
    "email":"nobita@gmail.com", "number" : "6756789"
  };
}

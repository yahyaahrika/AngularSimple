import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
  title = 'AppAngular';
  name = 'yahya ahrika';
  age:number = 15;

   clickfun(){
    console.log('Event Clicked!');
  }
  onchange(){
    console.log('Event OnChange!');
  }
  logStatus: string = "login ";
  isAuth: boolean = false;

  toggle(){
    this.isAuth = !this.isAuth;
    this.logStatus = this.isAuth ? "Logout" : "Login" ;
  }

   colors = ['Red','White','Black','Green','Yellow'];
}

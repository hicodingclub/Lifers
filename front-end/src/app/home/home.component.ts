import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  imageObject = [ {
     imageURL: 'assets/images/life hacks.jpg',
     heading: 'We Work Together for a Better Tomorrow',
   }] 

}

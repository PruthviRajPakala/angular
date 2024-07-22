import { CommonModule,  } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-ng-for',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {

// nums = [1,2,3,4,5,6,7,8,9,10];

// apla = ['P','R','U','T','H','V','I']

// mobiles = ['realme', 'iphone','redmi','appo', 'sumsung'];


mDetails = [
  {
    "id" : 2,
    "name" : "one plus",
    "price" : 40000,
    "ram" : "8gb",
    "storage" : "128gb"

  },
  {
    "id" : 3,
    "name" : "Mi",
    "price" : 20000,
    "ram" : "8gb",
    "storage" : "128gb"

  },
  {
    "id" : 4,
    "name" : "oppo",
    "price" : 20000,
    "ram" : "4gb",
    "storage" : "60gb"

  },



]



}

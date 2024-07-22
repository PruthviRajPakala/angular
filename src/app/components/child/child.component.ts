import { NgFor } from '@angular/common';
import { Component, Input,  } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [NgFor],
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

@Input()d1:string = "";

@Input()a:any="";
  
  constructor() {}

  
}

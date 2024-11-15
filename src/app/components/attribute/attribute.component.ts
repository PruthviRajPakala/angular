import { Component } from '@angular/core';


@Component({
  selector: 'app-attribute',
  standalone: true,
  imports: [],
  templateUrl: './attribute.component.html',
  styleUrl: './attribute.component.css'
})
export class AttributeComponent {


  isdisabled: boolean =false;
  ishidden: boolean = false;

  // path : string ='src/app/assets/krishna.png';

}

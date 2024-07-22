import { Component } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  standalone: true,
  imports: [],
  templateUrl: './style-binding.component.html',
  styleUrl: './style-binding.component.css'
})
export class StyleBindingComponent {

  // cvar: string = 'green';

 

 

  mystyle: object = {
    color: 'green',
    background: 'yellow',
    border: '5px solid red'
  };

}
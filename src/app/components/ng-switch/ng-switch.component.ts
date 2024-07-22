import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-ng-switch',
  standalone: true,
  imports: [
   
    FormsModule,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
    
  ],
  templateUrl: './ng-switch.component.html',
  styleUrl: './ng-switch.component.css'
})
export class NgSwitchComponent {

  num1 :number = 2;
  num2 : number = 8;

  op : string ="";

}

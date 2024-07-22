import { CommonModule,  } from '@angular/common';
import { Component,   } from '@angular/core';


@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {

  name = "angular";

  lname = "PRUTHVI";
  
   salary = 340000;


   details = {
    'name' : "pruthvi",
    'age' : 24,
    'salary' : 20000,
   }

   dob = new Date();

   num = 0.89;

   company = "skywaves";
   



}

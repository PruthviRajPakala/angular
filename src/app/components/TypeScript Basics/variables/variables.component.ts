import { Component } from '@angular/core';

@Component({
  selector: 'app-variables',
  standalone: true,
  imports: [],
  templateUrl: './variables.component.html',
  styleUrl: './variables.component.css'
})
export class VariablesComponent {


 //  variables with data types
 name: string = 'Pruthvi Raj';
 age: number = 25;
 isStudent: boolean = true;


 // Using operators
 a: number = 5;
 b: number = 10;
 sum: number = this.a + this.b; // Arithmetic operator


   // Comparison and logical operators
   isEqual: boolean = this.a === this.b; // Comparison operator
   isBothTrue: boolean = (this.a > 2) && (this.b < 20); // Logical operator


     // Function to toggle student's status
  toggleStudentStatus(): void {
    this.isStudent = !this.isStudent;
  }


}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule,  } from '@angular/forms';

@Component({
  selector: 'app-operators',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './operators.component.html',
  styleUrl: './operators.component.css'
})
export class OperatorsComponent {


  num1: any = 0;
  num2: number = 0;
  result: any;
  message: string = '';

  constructor() {}

  // Arithmetic Operations
  arithmetic(operation: string): void {
    switch(operation) {
      case 'add':
        this.result = this.num1 + this.num2;
        break;
      case 'subtract':
        this.result = this.num1 - this.num2;
        break;
      case 'multiply':
        this.result = this.num1 * this.num2;
        break;
      case 'divide':
        this.result = this.num1 / this.num2;
        break;
      case 'modulus':
        this.result = this.num1 % this.num2;
        break;
    }
  }

  // Comparison Operations
  comparison(operation: string): void {
    switch(operation) {
      case 'equal':
        this.result = this.num1 == this.num2;
        break;
      case 'strictEqual':
        this.result = this.num1 === this.num2;
        break;
      case 'notEqual':
        this.result = this.num1 != this.num2;
        break;
      case 'strictNotEqual':
        this.result = this.num1 !== this.num2;
        break;
      case 'greaterThan':
        this.result = this.num1 > this.num2;
        break;
      case 'lessThan':
        this.result = this.num1 < this.num2;
        break;
      case 'greaterThanOrEqual':
        this.result = this.num1 >= this.num2;
        break;
      case 'lessThanOrEqual':
        this.result = this.num1 <= this.num2;
        break;
    }
  }

  // Logical Operations
  logical(operation: string): void {
    switch(operation) {
      case 'and':
        this.result = this.num1 && this.num2;
        break;
      case 'or':
        this.result = this.num1 || this.num2;
        break;
      case 'not':
        this.result = !this.num1;
        break;
    }
  }

  // Assignment Operations
  assignment(operation: string): void {
    switch(operation) {
      case 'assign':
        this.num1 = this.num2;
        this.result = this.num1;
        break;
      case 'addAssign':
        this.num1 += this.num2;
        this.result = this.num1;
        break;
      case 'subtractAssign':
        this.num1 -= this.num2;
        this.result = this.num1;
        break;
      case 'multiplyAssign':
        this.num1 *= this.num2;
        this.result = this.num1;
        break;
      case 'divideAssign':
        this.num1 /= this.num2;
        this.result = this.num1;
        break;
    }
  }

  //Type Operations
  typeOperation(operation: string): void {
    switch(operation) {
      case 'typeOf':
        this.result = typeof this.num1;
        break;
      case 'instanceOf':
        this.result = this.num1 instanceof Number;  //  instance is for object type  
        break;
    }
  }

  // Bitwise Operations
  bitwise(operation: string): void {
    switch(operation) {
      case 'and':
        this.result = this.num1 & this.num2;
        break;
      case 'or':
        this.result = this.num1 | this.num2;
        break;
      case 'xor':
        this.result = this.num1 ^ this.num2;
        break;
      case 'not':
        this.result = ~this.num1;
        break;
      case 'leftShift':
        this.result = this.num1 << this.num2;
        break;
      case 'rightShift':
        this.result = this.num1 >> this.num2;
        break;
    }
  }

  // Ternary Operation
  ternary(): void {
    this.result = this.num1 > this.num2 ? this.num1 : this.num2;
  }


}

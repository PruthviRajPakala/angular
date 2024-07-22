import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  standalone: true,
  imports: [],
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.css'
})
export class EventBindingComponent {

  counter : number = 0;

  increment() {
    this.counter+=1;
  }

  decrement() {
    this.counter-=1;
  }


  //==================================================================
  name = 'xyz';

  changeName(e: any) {

    console.log(e);
    console.log(e.target);
    // console.log(e.target.value);

    // this.name = e.target.value;

  }


}

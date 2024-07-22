import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css'
})
export class Child1Component {
  @Output() custeve = new EventEmitter()

  message = "pass to parent";

   passtoparent() {

    this.custeve.emit(this.message);
    
  }


  updatemessage(e:any) {
  this.message=e.target.value;
}

}

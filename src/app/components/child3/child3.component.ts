import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-child3',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child3.component.html',
  styleUrl: './child3.component.css'
})
export class Child3Component {

  data = "this is view child component";

  passtoparent() {
    return this.data;
  }
}

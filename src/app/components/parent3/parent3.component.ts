import { Component, ViewChild,  } from '@angular/core';
import { Child3Component } from '../child3/child3.component';


@Component({
  selector: 'app-parent3',
  standalone: true,
  imports: [Child3Component],
  templateUrl: './parent3.component.html',
  styleUrl: './parent3.component.css'
})
export class Parent3Component {

  @ViewChild(Child3Component)  child:any

  cdata="";
    
  test(){
    this.cdata=this.child.passtoparent()
    
  }

}

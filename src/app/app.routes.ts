import { Routes } from '@angular/router';
import { StringInterpolationComponent } from './components/string-interpolation/string-interpolation.component';
import { AttributeComponent } from './components/attribute/attribute.component';
import { ClassBindingComponent } from './components/class-binding/class-binding.component';
import { StyleBindingComponent } from './components/style-binding/style-binding.component';
import { AppComponent } from './app.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { TwoWayDataBindingComponent } from './components/two-way-data-binding/two-way-data-binding.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { Parent1Component } from './components/parent1/parent1.component';
import { Child1Component } from './components/child1/child1.component';
import { Parent2Component } from './components/parent2/parent2.component';
import { Child2Component } from './components/child2/child2.component';
import { Parent3Component } from './components/parent3/parent3.component';
import { Child3Component } from './components/child3/child3.component';
import { OperatorsComponent } from './components/operators/operators.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { VariablesComponent } from './components/TypeScript Basics/variables/variables.component';




export const routes: Routes = [
     { path: '',component:AppComponent }, 
    { path: 'string', component: StringInterpolationComponent },
    {path: 'attribute', component:AttributeComponent},
    {path:'classBinding',component:ClassBindingComponent},
    {path:'styleBinding',component:StyleBindingComponent},
    {path:'eventBinding',component:EventBindingComponent},
    {path:'twoWayDataBinding', component:TwoWayDataBindingComponent},
    {path:'directives', component:DirectivesComponent},
    {path:'ngif',component:NgIfComponent},
    {path:'ngfor',component:NgForComponent },
    {path:'ngSwitch',component:NgSwitchComponent},
    {path:'pipes',component:PipesComponent},
    // @input() decorator
    {path:'parent',component:ParentComponent},
    {path:'child',component:ChildComponent},
    // @Output() decorator
    {path:'parent1',component:Parent1Component},
    {path:'child1',component:Child1Component},
    // tempalte reference variable 
    {path:'parent2',component: Parent2Component},
    {path:'child2',component:Child2Component},
    //@ViewChild(Decorator)
    {path:'parent3',component:Parent3Component},
    {path:'child3', component:Child3Component},
    {path:'operators', component:OperatorsComponent},
    {path:'userForm',component: UserFormComponent},

    //b. TypeScript Basics
    //•	Variables, data types, and operators
    {path:'variables', component: VariablesComponent},
    
    
    
  ];
  
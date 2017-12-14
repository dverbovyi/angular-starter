import { Component } from '@angular/core';
import { PolymerElement } from '@vaadin/angular2-polymer';

@Component({
  selector: 'app-poly',
  templateUrl: './poly.component.html',
  styleUrls: ['./poly.component.scss'] 
})

export class PolyComponent {
  title = 'demo works!';
  date = '';
  hostValue = 'User'

  items = [
    'one',
    'two',
    'three'
  ];
  
  ngOnInit() {
    this.date = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`;
  }

  onSelected($event) {
    var calendarDate = event.srcElement.getAttribute('chosen');
    this.date = calendarDate;
  }

  onValueChange($event){
    // TODO :: implement two way binding
  }

  f(){
    console.log('asdasd');
  }
}
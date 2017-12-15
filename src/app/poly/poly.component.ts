import { Component } from '@angular/core';
import { PolymerElement } from '@vaadin/angular2-polymer';
import { HttpClientModule } from '@angular/common/http';
import { Http, Response } from '@angular/http'
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-poly',
  templateUrl: './poly.component.html',
  styleUrls: ['./poly.component.scss']
})

export class PolyComponent {
  url = 'https://jsonplaceholder.typicode.com/photos';
  data = {};

  title = 'demo works!';
  date = '';
  hostValue = 'User'

  collection: any;

  items = [
    'one',
    'two',
    'three'
  ];

  ngOnInit() {
    this.date = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`;
  }

  constructor(private http: Http) {
      this.getContacts();
      this.getData();
  }

  getData() {
    return this.http.get(this.url)
      .map((res: Response) => res.json());
  }

  getContacts(){
      this.getData().subscribe(data => {
          var beforeRenderTime = window.performance.now();
          console.log('Before rendering => ' + beforeRenderTime);

          this.data = data;

          var afterRenderTime = window.performance.now();
          console.log('After rendering => ' + afterRenderTime);
          console.log('Rendering time :' + (afterRenderTime - beforeRenderTime));
      })

      console.log(this.data);
  }

  onSelected($event) {
    var calendarDate = event.srcElement.getAttribute('chosen');
    this.date = calendarDate;
  }

  onValueChange($event) {
    // TODO :: implement two way binding
  }
}
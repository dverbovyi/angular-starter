import { Component, OnInit } from '@angular/core';
import { PolyComponent } from '../poly/poly.component'

@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'] 
})
export class DashboardComponent implements OnInit {
  title = 'demo works!';

  constructor() { }

  ngOnInit() {
  }
}
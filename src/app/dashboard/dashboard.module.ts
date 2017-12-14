import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { PolyComponent } from '../poly/poly.component';
import {  HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpModule    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  declarations: [DashboardComponent, PolyComponent]
})
export class DashboardModule { }

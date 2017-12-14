import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PolymerModule } from '@codebakery/origami';
import { IronElementsModule, PaperElementsModule } from '@codebakery/origami/lib/collections';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { EntityManageModule } from './entity-manage/entity-manage.module';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { PolyComponent } from './poly/poly.component';
import { CustomPolyButtonComponent } from './custom-poly-button/custom-poly-button.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    CustomPolyButtonComponent
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    AppRoutingModule,
    DashboardModule,
    EntityManageModule,
    BrowserModule,
    FormsModule, 
    PolymerModule.forRoot(),
    IronElementsModule,
    PaperElementsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

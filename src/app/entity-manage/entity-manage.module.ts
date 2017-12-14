import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityManageComponent } from './entity-manage.component';
import { EntityManageRoutingModule } from './entity-manage-routing.module';

@NgModule({
  imports: [
    CommonModule,
    EntityManageRoutingModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [EntityManageComponent]
})
export class EntityManageModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityManageComponent } from './entity-manage.component';
import { EntityManageRoutingModule } from './entity-manage-routing.module';

@NgModule({
  imports: [
    CommonModule,
    EntityManageRoutingModule
  ],
  declarations: [EntityManageComponent]
})
export class EntityManageModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntityManageComponent } from './entity-manage.component';

const routes: Routes = [
  {
    path: 'entity-manage', component: EntityManageComponent, pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class EntityManageRoutingModule { }

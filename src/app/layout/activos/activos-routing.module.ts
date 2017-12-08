import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivosComponent } from './activos.component';
import { AddActivoComponent } from 'app/layout/activos/add-activo/add-activo.component';
import { ListActivoComponent } from 'app/layout/activos/list-activo/list-activo.component';
import { DetailActivoComponent } from 'app/layout/activos/list-activo/detail-activo/detail-activo.component';
import { EditActivoComponent } from 'app/layout/activos/list-activo/edit-activo/edit-activo.component';

const routes: Routes = [
  { path: '', 
  component: ActivosComponent,
  children: [
    { 
      path: 'add', 
      component: AddActivoComponent
    },
    {
      path: 'list', 
      component: ListActivoComponent,
      children: [
        {
          path: 'view/:activo-id',
          component: DetailActivoComponent
        },
        {
          path: 'edit/:activo-id',
          component: EditActivoComponent
        }
      ]
    }
  ] 
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivosRoutingModule { }

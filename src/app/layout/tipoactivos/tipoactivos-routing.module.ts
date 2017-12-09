import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipoactivosComponent } from './tipoactivos.component';
import { AddTipoactivoComponent } from 'app/layout/tipoactivos/add-tipoactivo/add-tipoactivo.component';
import { ListTipoactivoComponent } from 'app/layout/tipoactivos/list-tipoactivo/list-tipoactivo.component';
import { DetailTipoactivoComponent } from 'app/layout/tipoactivos/list-tipoactivo/detail-tipoactivo/detail-tipoactivo.component';
import { EditTipoactivoComponent } from 'app/layout/tipoactivos/list-tipoactivo/edit-tipoactivo/edit-tipoactivo.component';

const routes: Routes = [
  { path: '', 
    component: TipoactivosComponent,
    children: [
      { 
        path: 'add', 
        component: AddTipoactivoComponent
      },
      {
        path: 'list', 
        component: ListTipoactivoComponent,
        children: [
          {
            path: 'view/:tipoactivo-id',
            component: DetailTipoactivoComponent
          },
          {
            path: 'edit/:tipoactivo-id',
            component: EditTipoactivoComponent
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
export class TipoactivosRoutingModule { }

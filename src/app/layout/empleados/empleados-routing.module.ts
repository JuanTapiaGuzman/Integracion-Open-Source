import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpleadosComponent } from './empleados.component';
import { AddEmpleadoComponent } from 'app/layout/empleados/add-empleado/add-empleado.component';
import { ListEmpleadoComponent } from 'app/layout/empleados/list-empleado/list-empleado.component';
import { DetailEmpleadoComponent } from 'app/layout/empleados/list-empleado/detail-empleado/detail-empleado.component';
import { EditEmpleadoComponent } from 'app/layout/empleados/list-empleado/edit-empleado/edit-empleado.component';

const routes: Routes = [
  { path: '', 
    component: EmpleadosComponent,
    children: [
      { 
        path: 'add', 
        component: AddEmpleadoComponent
      },
      {
        path: 'list', 
        component: ListEmpleadoComponent,
        children: [
          {
            path: 'view/:empleado-id',
            component: DetailEmpleadoComponent
          },
          {
            path: 'edit/:empleado-id',
            component: EditEmpleadoComponent
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
export class EmpleadosRoutingModule { }

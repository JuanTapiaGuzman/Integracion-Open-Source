import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpleadosRoutingModule } from './empleados-routing.module';
import { EmpleadosComponent } from './empleados.component';

import { EmpleadosService } from 'app/shared/services/empleados.service';
import { AddEmpleadoComponent } from './add-empleado/add-empleado.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListEmpleadoComponent } from './list-empleado/list-empleado.component';
import { EditEmpleadoComponent } from './list-empleado/edit-empleado/edit-empleado.component';
import { DetailEmpleadoComponent } from './list-empleado/detail-empleado/detail-empleado.component';
import { PageHeaderModule } from 'app/shared';

@NgModule({
  imports: [
    CommonModule,
    EmpleadosRoutingModule,
    PageHeaderModule,
    ReactiveFormsModule
  ],
  declarations: [EmpleadosComponent, AddEmpleadoComponent, ListEmpleadoComponent, DetailEmpleadoComponent, EditEmpleadoComponent],
  providers: [EmpleadosService]
})
export class EmpleadosModule { }

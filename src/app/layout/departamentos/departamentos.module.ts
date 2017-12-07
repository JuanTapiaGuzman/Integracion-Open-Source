import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartamentosRoutingModule } from './departamentos-routing.module';
import { DepartamentosComponent } from './departamentos.component';
import { PageHeaderModule } from './../../shared';
import { FormularioComponent } from './formulario/formulario.component';
import { DepartamentosService } from 'app/shared/services/departamentos.service';
import { AddDepartamentoComponent } from './add-departamento/add-departamento.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListDepartamentoComponent } from './list-departamento/list-departamento.component';
import { EditDepartamentoComponent } from './list-departamento/edit-departamento/edit-departamento.component';
import { DetailDepartamentoComponent } from './list-departamento/detail-departamento/detail-departamento.component';

@NgModule({
  imports: [
    CommonModule,
    DepartamentosRoutingModule,
    PageHeaderModule,
    ReactiveFormsModule
  ],
  declarations: [DepartamentosComponent, FormularioComponent, AddDepartamentoComponent, ListDepartamentoComponent, EditDepartamentoComponent, DetailDepartamentoComponent],
  providers: [DepartamentosService]
})
export class DepartamentosModule { }

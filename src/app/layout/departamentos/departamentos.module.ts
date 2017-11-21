import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartamentosRoutingModule } from './departamentos-routing.module';
import { DepartamentosComponent } from './departamentos.component';
import { PageHeaderModule } from './../../shared';
import { FormularioComponent } from './formulario/formulario.component';

@NgModule({
  imports: [
    CommonModule,
    DepartamentosRoutingModule,
    PageHeaderModule
  ],
  declarations: [DepartamentosComponent, FormularioComponent]
})
export class DepartamentosModule { }

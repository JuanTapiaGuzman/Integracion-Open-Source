import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartamentosRoutingModule } from './departamentos-routing.module';
import { DepartamentosComponent } from './departamentos.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
  imports: [
    CommonModule,
    DepartamentosRoutingModule,
    PageHeaderModule
  ],
  declarations: [DepartamentosComponent]
})
export class DepartamentosModule { }

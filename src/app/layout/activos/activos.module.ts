import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivosRoutingModule } from './activos-routing.module';
import { ActivosComponent } from './activos.component';

import { ActivosService } from 'app/shared/services/activos.service';
import { AddActivoComponent } from './add-activo/add-activo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListActivoComponent } from './list-activo/list-activo.component';
import { EditActivoComponent } from './list-activo/edit-activo/edit-activo.component';
import { DetailActivoComponent } from './list-activo/detail-activo/detail-activo.component';
import { PageHeaderModule } from 'app/shared';

@NgModule({
  imports: [
    CommonModule,
    ActivosRoutingModule,
    PageHeaderModule,
    ReactiveFormsModule
  ],
  declarations: [ActivosComponent, AddActivoComponent, ListActivoComponent, DetailActivoComponent, EditActivoComponent],
  providers: [ActivosService]
})
export class ActivosModule { }

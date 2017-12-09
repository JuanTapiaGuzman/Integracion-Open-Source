import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipoactivosRoutingModule } from './tipoactivos-routing.module';
import { TipoactivosComponent } from './tipoactivos.component';

import { TipoActivosService } from 'app/shared/services/tipoactivos.service';
import { AddTipoactivoComponent } from './add-tipoactivo/add-tipoactivo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListTipoactivoComponent } from './list-tipoactivo/list-tipoactivo.component';
import { EditTipoactivoComponent } from './list-tipoactivo/edit-tipoactivo/edit-tipoactivo.component';
import { DetailTipoactivoComponent } from './list-tipoactivo/detail-tipoactivo/detail-tipoactivo.component';
import { PageHeaderModule } from 'app/shared';

@NgModule({
  imports: [
    CommonModule,
    TipoactivosRoutingModule,
    ReactiveFormsModule,
    PageHeaderModule
  ],
  declarations: [TipoactivosComponent, AddTipoactivoComponent, ListTipoactivoComponent, DetailTipoactivoComponent, EditTipoactivoComponent],
  providers: [TipoActivosService]
})
export class TipoactivosModule { }

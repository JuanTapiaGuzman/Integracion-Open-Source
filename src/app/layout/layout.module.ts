import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent, SidebarComponent } from '../shared';
import { TipoactivosComponent } from './tipoactivos/tipoactivos.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { ActivosComponent } from './activos/activos.component';
import { CalculoComponent } from './calculo/calculo.component';
import { AsientosComponent } from './asientos/asientos.component';

@NgModule({
    imports: [
        CommonModule,
        NgbDropdownModule.forRoot(),
        LayoutRoutingModule,
        TranslateModule
    ],
    declarations: [
        LayoutComponent,
        HeaderComponent,
        SidebarComponent,
        TipoactivosComponent,
        EmpleadosComponent,
        ActivosComponent,
        CalculoComponent,
        AsientosComponent
    ]
})
export class LayoutModule { }

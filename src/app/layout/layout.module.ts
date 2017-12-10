import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent, SidebarComponent } from '../shared';
import { CalculoComponent } from './calculo/calculo.component';
import { AsientosComponent } from './asientos/asientos.component';
import { DataTableModule } from 'angular-4-data-table';
import { DepreciacionAcumuladaComponent } from './depreciacion-acumulada/depreciacion-acumulada.component';

@NgModule({
    imports: [
        CommonModule,
        NgbDropdownModule.forRoot(),
        LayoutRoutingModule,
        TranslateModule,
        DataTableModule
    ],
    declarations: [
        LayoutComponent,
        HeaderComponent,
        SidebarComponent,
        CalculoComponent,
        AsientosComponent,
        DepreciacionAcumuladaComponent
    ]
})
export class LayoutModule { }

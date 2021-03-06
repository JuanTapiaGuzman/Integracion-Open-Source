import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'departamentos', loadChildren: './departamentos/departamentos.module#DepartamentosModule' },
            { path: 'empleados', loadChildren: './empleados/empleados.module#EmpleadosModule' },
            { path: 'activos', loadChildren: './activos/activos.module#ActivosModule' },
            { path: 'tipoactivos', loadChildren: './tipoactivos/tipoactivos.module#TipoactivosModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartamentosComponent } from './departamentos.component';

const routes: Routes = [
    { path: '', component: DepartamentosComponent,
    children: [
      { path: 'formulario', loadChildren: './formulario/formulario.module#FormularioModule' }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartamentosRoutingModule { }

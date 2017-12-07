import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartamentosComponent } from './departamentos.component';
import { AddDepartamentoComponent } from 'app/layout/departamentos/add-departamento/add-departamento.component';
import { ListDepartamentoComponent } from 'app/layout/departamentos/list-departamento/list-departamento.component';
import { DetailDepartamentoComponent } from 'app/layout/departamentos/list-departamento/detail-departamento/detail-departamento.component';
import { EditDepartamentoComponent } from 'app/layout/departamentos/list-departamento/edit-departamento/edit-departamento.component';

const routes: Routes = [
    { path: '', component: DepartamentosComponent,
      children: [
      { 
        path: 'add', component: AddDepartamentoComponent
      },
      {
        path: 'list', component: ListDepartamentoComponent,
        children: [
          {
            path: 'view/:departamento-id',
              component: DetailDepartamentoComponent
        },
           {
            path: 'edit/:departamento-id',
              component: EditDepartamentoComponent
        }
      ]
      }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartamentosRoutingModule { }

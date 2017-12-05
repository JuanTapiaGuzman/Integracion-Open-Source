import { Component } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { DataTableResource } from 'angular-4-data-table';
import { DepartamentosService } from 'app/shared/services/departamentos.service';
import { Departamento } from 'app/shared/models/Departamento';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.scss'],
  animations: [routerTransition()]
})
export class DepartamentosComponent {
  departamentos: Departamento[];
  
    constructor( private departamentosService: DepartamentosService) {
      this.departamentosService.getAllDepartamentos().then(departamentos => this.departamentos = departamentos);
    }

  editar(id){
    alert("Se edito " + id);
  }

  eliminar(id){
    alert("Se elimino " + id);
  }

  agregar(){
    alert("Agregar un departamento");
  }
}




import { Component } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Http } from '@angular/http';
import { DataTableResource } from 'angular-4-data-table';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.scss'],
  animations: [routerTransition()]
})
export class DepartamentosComponent {
  private url: string = "http://activosfijosapi20171107045022.azurewebsites.net/Api/Departamento/";
  departamentos: any[];

  constructor(http: Http) {
    http.get(this.url)
    .subscribe( response => {
      this.departamentos = response.json().departamentos;
    });
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




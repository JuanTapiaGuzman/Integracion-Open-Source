import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Http } from '@angular/http';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.scss']
})
export class DepartamentosComponent {
  private url: string = "http://activosfijosapi20171107045022.azurewebsites.net/Api/Departamento/";

  constructor(http: Http) {
    http.get(this.url)
    .subscribe( response => {
      console.log(response);
    });
  }

}


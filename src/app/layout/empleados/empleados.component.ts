import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'app/router.animations';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.scss'],
  animations: [routerTransition()]
})
export class EmpleadosComponent {

}

import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'app/router.animations';

@Component({
  selector: 'app-activos',
  templateUrl: './activos.component.html',
  styleUrls: ['./activos.component.scss'],
  animations: [routerTransition()]
})
export class ActivosComponent {

}

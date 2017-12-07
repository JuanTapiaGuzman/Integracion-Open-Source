import { Component } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.scss'],
  animations: [routerTransition()]
})
export class DepartamentosComponent {
  
}




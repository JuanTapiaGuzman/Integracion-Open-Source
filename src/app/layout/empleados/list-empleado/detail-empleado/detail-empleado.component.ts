import { Component, OnInit } from '@angular/core';
import { Empleado } from 'app/shared/models/empleado';
import { EmpleadosService } from 'app/shared/services/empleados.service';
import { ActivatedRoute } from '@angular/router/';
import { Params } from '@angular/router';

@Component({
  selector: 'app-detail-empleado',
  templateUrl: './detail-empleado.component.html',
  styleUrls: ['./detail-empleado.component.scss']
})
export class DetailEmpleadoComponent implements OnInit {
  empleado: Empleado;
	constructor(private empleadoService: EmpleadosService,
              private route: ActivatedRoute) { }
              
  ngOnInit() {
      this.route.params
      .switchMap((params: Params) => this.empleadoService.getEmpleado(+params['empleado-id']))
      .subscribe(empleado => this.empleado = empleado);
  }	
}

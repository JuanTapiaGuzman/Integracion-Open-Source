import { Component, OnInit } from '@angular/core';
import { Empleado } from 'app/shared/models/Empleado';
import { EmpleadosService } from 'app/shared/services/empleados.service';

@Component({
  selector: 'app-list-empleado',
  templateUrl: './list-empleado.component.html',
  styleUrls: ['./list-empleado.component.scss']
})
export class ListEmpleadoComponent implements OnInit {
  empleados: Promise<Empleado[]>;
  constructor(private empleadosService: EmpleadosService) { }

  ngOnInit() {
    this.empleados = this.empleadosService.getAllEmpleados();
  }

}

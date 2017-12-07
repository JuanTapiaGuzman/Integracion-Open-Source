import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from 'app/shared/services/empleados.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Empleado } from 'app/shared/models/Empleado';

@Component({
  selector: 'app-add-empleado',
  templateUrl: './add-empleado.component.html',
  styleUrls: ['./add-empleado.component.scss']
})
export class AddEmpleadoComponent {
  constructor(
    private empleadoService: EmpleadosService,
    private route: ActivatedRoute,
    private router: Router) { }

    empleadoForm = new FormGroup({
      nombre: new FormControl(),
      cedula: new FormControl(),
      iD_Departamento: new FormControl(),
      tipoPersona: new FormControl(),
      fechaIngreso: new FormControl(),
      estado: new FormControl()
    })

    onFormSubmit(){
      let nombre = this.empleadoForm.get('nombre').value;
      let cedula = this.empleadoForm.get('cedula').value;
      let iD_Departamento = this.empleadoForm.get('iD_Departamento').value;
      let tipoPersona = this.empleadoForm.get('tipoPersona').value;
      let fechaIngreso = this.empleadoForm.get('fechaIngreso').value;
      let estado = this.empleadoForm.get('estado').value;

      let empleado = new Empleado();
      empleado.Id = null;
      empleado.Nombre = nombre;
      empleado.Cedula = cedula;
      empleado.ID_Departamento = iD_Departamento;
      empleado.TipoPersona = tipoPersona;
      empleado.FechaIngreso = fechaIngreso;
      empleado.Estado = estado;

      this.empleadoService.postEmpleado(empleado)
          .then(data => this.router.navigate([ '../list/view', data.Id ], { relativeTo: this.route })
        );
    }

}

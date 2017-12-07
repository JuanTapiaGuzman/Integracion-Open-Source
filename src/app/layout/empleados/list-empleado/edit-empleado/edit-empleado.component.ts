import { FormGroup, FormControl } from '@angular/forms';
import { EmpleadosService } from 'app/shared/services/empleados.service';
import { Empleado } from 'app/shared/models/Empleado';
import { Component, OnInit } from '@angular/core';
import { Params, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-empleado',
  templateUrl: './edit-empleado.component.html',
  styleUrls: ['./edit-empleado.component.scss']
})
export class EditEmpleadoComponent implements OnInit {
  empleado: Empleado;
  constructor(private empleadoService: EmpleadosService,
              private route: ActivatedRoute,
              private router: Router) { }

  
  ngOnInit() {
    this.route.params
    .switchMap((params: Params) => this.empleadoService.getEmpleado(+params['empleado-id']))
    .subscribe(empleado => {
        this.empleado = empleado;
        this.setFormValues();
      }
    );
  }

  empleadoForm = new FormGroup({
    nombre: new FormControl(),
    cedula: new FormControl(),
    iD_Departamento: new FormControl(),
    tipoPersona: new FormControl(),
    fechaIngreso: new FormControl(),
    estado: new FormControl()
  })

  setFormValues() {
    this.empleadoForm.setValue({
      nombre: this.empleado.Nombre,
      cedula: this.empleado.Cedula,
      iD_Departamento: this.empleado.ID_Departamento,
      tipoPersona: this.empleado.TipoPersona,
      fechaIngreso: this.empleado.FechaIngreso,
      estado: this.empleado.Estado
    });
 }	
 onFormSubmit() {
    this.empleado.Nombre = this.empleadoForm.get('nombre').value;
    this.empleado.Cedula = this.empleadoForm.get('cedula').value;
    this.empleado.ID_Departamento = this.empleadoForm.get('iD_Departamento').value;
    this.empleado.TipoPersona = this.empleadoForm.get('tipoPersona').value;
    this.empleado.FechaIngreso = this.empleadoForm.get('fechaIngreso').value;
    this.empleado.Estado = this.empleadoForm.get('estado').value;
    
    this.empleadoService.updateEmpleado(this.empleado)
      .then(() =>
         this.router.navigate([ '../../' ], { relativeTo: this.route })
    );
 }
}

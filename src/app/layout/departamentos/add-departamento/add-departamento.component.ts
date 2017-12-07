import { Component, OnInit } from '@angular/core';
import { DepartamentosService } from 'app/shared/services/departamentos.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Departamento } from 'app/shared/models/Departamento';

@Component({
  selector: 'app-add-departamento',
  templateUrl: './add-departamento.component.html',
  styleUrls: ['./add-departamento.component.scss']
})
export class AddDepartamentoComponent {
  constructor(
    private departamentoService: DepartamentosService,
    private route: ActivatedRoute,
    private router: Router) { }

    departamentoForm = new FormGroup({
      id: new FormControl(),
      descripcion: new FormControl(),
      estado: new FormControl()
    })

    onFormSubmit(){
      let descripcion = this.departamentoForm.get('descripcion').value;
      let estado = this.departamentoForm.get('estado').value;

      let departamento = new Departamento();
      departamento.Id = null;
      departamento.Descripcion = descripcion;
      departamento.Estado = estado;

      this.departamentoService.postDepartamento(departamento)
          .then(data => this.router.navigate([ '../list/view', data.Id ], { relativeTo: this.route })
        );
    }

}

import { Component, OnInit } from '@angular/core';
import { Departamento } from 'app/shared/models/Departamento';
import { DepartamentosService } from 'app/shared/services/departamentos.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Params } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-departamento',
  templateUrl: './edit-departamento.component.html',
  styleUrls: ['./edit-departamento.component.scss']
})
export class EditDepartamentoComponent implements OnInit {
  departamento: Departamento;
  constructor(private departamentoService: DepartamentosService,
              private route: ActivatedRoute,
              private router: Router) { }

  
  ngOnInit() {
    this.route.params
    .switchMap((params: Params) => this.departamentoService.getDepartamento(+params['departamento-id']))
    .subscribe(departamento => {
        this.departamento = departamento;
        this.setFormValues();
      }
    );
  }

  departamentoForm = new FormGroup({
    descripcion: new FormControl(),
    estado: new FormControl()
  })

  setFormValues() {
    this.departamentoForm.setValue({
      descripcion: this.departamento.Descripcion,
      estado: this.departamento.Estado
    });
 }	
 onFormSubmit() {
    this.departamento.Descripcion = this.departamentoForm.get('descripcion').value;
    this.departamento.Estado = this.departamentoForm.get('estado').value;
    
    this.departamentoService.updateDepartamento(this.departamento)
      .then(() =>
         this.router.navigate([ '../../' ], { relativeTo: this.route })
    );
 }

}

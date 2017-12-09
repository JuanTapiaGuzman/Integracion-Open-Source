import { Component, OnInit } from '@angular/core';
import { ActivosService } from 'app/shared/services/activos.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Activo } from 'app/shared/models/Activo';
import { Params } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-activo',
  templateUrl: './edit-activo.component.html',
  styleUrls: ['./edit-activo.component.scss']
})
export class EditActivoComponent implements OnInit {
  activo: Activo;
  constructor(private activoService: ActivosService,
              private route: ActivatedRoute,
              private router: Router) { }

  
  ngOnInit() {
    this.route.params
    .switchMap((params: Params) => this.activoService.getActivo(+params['activo-id']))
    .subscribe(activo => {
        this.activo = activo;
        this.setFormValues();
      }
    );
  }

  activoForm = new FormGroup({
    descripcion: new FormControl(),
    iD_Departamento: new FormControl(),
    iD_TipoActivo: new FormControl(),
    fechaRegistro: new FormControl(),
    valorCompra: new FormControl(),
    depreciacionAcumulada: new FormControl()
  })

  setFormValues() {
    this.activoForm.setValue({
      descripcion: this.activo.Descripcion,
      iD_Departamento: this.activo.ID_Departamento,
      iD_TipoActivo: this.activo.ID_TipoActivo,
      fechaRegistro: this.activo.FechaRegistro,
      valorCompra: this.activo.ValorCompra,
      depreciacionAcumulada: this.activo.DepreciacionAcumulada
    });
 }	
 onFormSubmit() {
    this.activo.Descripcion = this.activoForm.get('descripcion').value;
    this.activo.ID_Departamento = this.activoForm.get('iD_Departamento').value;
    this.activo.ID_TipoActivo = this.activoForm.get('iD_TipoActivo').value;
    this.activo.FechaRegistro = this.activoForm.get('fechaRegistro').value;
    this.activo.ValorCompra = this.activoForm.get('valorCompra').value;
    this.activo.DepreciacionAcumulada = this.activoForm.get('depreciacionAcumulada').value;
    
    this.activoService.updateActivo(this.activo)
      .then(() =>
         this.router.navigate([ '../../' ], { relativeTo: this.route })
    );
 }

}

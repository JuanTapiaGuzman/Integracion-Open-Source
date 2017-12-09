import { Component, OnInit } from '@angular/core';
import { TipoActivo } from 'app/shared/models/TipoActivo';
import { TipoActivosService } from 'app/shared/services/tipoactivos.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Params } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-tipoactivo',
  templateUrl: './edit-tipoactivo.component.html',
  styleUrls: ['./edit-tipoactivo.component.scss']
})
export class EditTipoactivoComponent implements OnInit {

  tipoactivo: TipoActivo;
  constructor(private tipoactivoService: TipoActivosService,
              private route: ActivatedRoute,
              private router: Router) { }

  
  ngOnInit() {
    this.route.params
    .switchMap((params: Params) => this.tipoactivoService.getTipoActivo(+params['tipoactivo-id']))
    .subscribe(tipoactivo => {
        this.tipoactivo = tipoactivo;
        this.setFormValues();
      }
    );
  }

  tipoactivoForm = new FormGroup({
    descripcion: new FormControl(),
    cuentaContableCompra: new FormControl(),
    cuentaContableDepreciacion: new FormControl(),
    estado: new FormControl()
  })

  setFormValues() {
    this.tipoactivoForm.setValue({
      descripcion: this.tipoactivo.Descripcion,
      cuentaContableCompra: this.tipoactivo.CuentaContableCompra,
      cuentaContableDepreciacion: this.tipoactivo.CuentaContableDepreciacion,
      estado: this.tipoactivo.Estado
    });
 }	
 onFormSubmit() {
    this.tipoactivo.Descripcion = this.tipoactivoForm.get('descripcion').value;
    this.tipoactivo.CuentaContableCompra = this.tipoactivoForm.get('cuentaContableCompra').value;
    this.tipoactivo.CuentaContableDepreciacion = this.tipoactivoForm.get('cuentaContableDepreciacion').value;
    this.tipoactivo.Estado = this.tipoactivoForm.get('estado').value;
    
    this.tipoactivoService.updateTipoActivo(this.tipoactivo)
      .then(() =>
         this.router.navigate([ '../../' ], { relativeTo: this.route })
    );
 }

}

import { Component, OnInit } from '@angular/core';
import { TipoActivo } from 'app/shared/models/TipoActivo';
import { TipoActivosService } from 'app/shared/services/tipoactivos.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Params } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-tipoactivo',
  templateUrl: './add-tipoactivo.component.html',
  styleUrls: ['./add-tipoactivo.component.scss']
})
export class AddTipoactivoComponent {
  constructor(private tipoactivoService: TipoActivosService,
    private route: ActivatedRoute,
    private router: Router) { }

  tipoactivoForm = new FormGroup({
    descripcion: new FormControl(),
    cuentaContableCompra: new FormControl(),
    cuentaContableDepreciacion: new FormControl(),
    estado: new FormControl()
  })

  onFormSubmit(){
    let descripcion = this.tipoactivoForm.get('descripcion').value;
    let cuentaContableCompra = this.tipoactivoForm.get('cuentaContableCompra').value;
    let cuentaContableDepreciacion = this.tipoactivoForm.get('cuentaContableDepreciacion').value;
    let estado = this.tipoactivoForm.get('estado').value;

    let tipoactivo = new TipoActivo();
    tipoactivo.Id = null;
    tipoactivo.Descripcion = descripcion;
    tipoactivo.CuentaContableCompra = cuentaContableCompra;
    tipoactivo.CuentaContableDepreciacion = cuentaContableDepreciacion;
    tipoactivo.Estado = estado;

    this.tipoactivoService.postTipoActivo(tipoactivo)
        .then(data => this.router.navigate([ '../list/view', data.Id ], { relativeTo: this.route })
      );
  }
}

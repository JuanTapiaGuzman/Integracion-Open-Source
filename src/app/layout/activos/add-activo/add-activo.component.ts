import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ActivosService } from 'app/shared/services/activos.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Activo } from 'app/shared/models/Activo';

@Component({
  selector: 'app-add-activo',
  templateUrl: './add-activo.component.html',
  styleUrls: ['./add-activo.component.scss']
})
export class AddActivoComponent {
  constructor(
    private activoService: ActivosService,
    private route: ActivatedRoute,
    private router: Router) { }

    activoForm = new FormGroup({
      descripcion: new FormControl(),
      iD_Departamento: new FormControl(),
      iD_TipoActivo: new FormControl(),
      fechaRegistro: new FormControl(),
      valorCompra: new FormControl(),
      depreciacionAcumulada: new FormControl()
    })

    onFormSubmit(){
      let descripcion = this.activoForm.get('descripcion').value;
      let iD_Departamento = this.activoForm.get('iD_Departamento').value;
      let iD_TipoActivo = this.activoForm.get('iD_TipoActivo').value;
      let fechaRegistro = this.activoForm.get('fechaRegistro').value;
      let valorCompra = this.activoForm.get('valorCompra').value;
      let depreciacionAcumulada = this.activoForm.get('depreciacionAcumulada').value;

      let activo = new Activo();
      activo.Id = null;
      activo.Descripcion = descripcion;
      activo.ID_Departamento = iD_Departamento;
      activo.ID_TipoActivo = iD_TipoActivo;
      activo.FechaRegistro = fechaRegistro;
      activo.ValorCompra = valorCompra;
      activo.DepreciacionAcumulada = depreciacionAcumulada;

      this.activoService.postActivo(activo)
          .then(data => this.router.navigate([ '../list/view', data.Id ], { relativeTo: this.route })
        );
  }
}

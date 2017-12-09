import { Component, OnInit } from '@angular/core';
import { TipoActivo } from 'app/shared/models/TipoActivo';
import { TipoActivosService } from 'app/shared/services/tipoactivos.service';
import { ActivatedRoute } from '@angular/router/';
import { Params } from '@angular/router';

@Component({
  selector: 'app-detail-tipoactivo',
  templateUrl: './detail-tipoactivo.component.html',
  styleUrls: ['./detail-tipoactivo.component.scss']
})
export class DetailTipoactivoComponent implements OnInit {
  tipoactivo: TipoActivo;
	constructor(private tipoactivoService: TipoActivosService,
              private route: ActivatedRoute) { }
              
  ngOnInit() {
      this.route.params
      .switchMap((params: Params) => this.tipoactivoService.getTipoActivo(+params['tipoactivo-id']))
      .subscribe(tipoactivo => this.tipoactivo = tipoactivo);
  }	
}

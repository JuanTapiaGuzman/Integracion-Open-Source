import { Component, OnInit } from '@angular/core';
import { TipoActivo } from 'app/shared/models/TipoActivo';
import { TipoActivosService } from 'app/shared/services/tipoactivos.service';

@Component({
  selector: 'app-list-tipoactivo',
  templateUrl: './list-tipoactivo.component.html',
  styleUrls: ['./list-tipoactivo.component.scss']
})
export class ListTipoactivoComponent implements OnInit {
  activos: Promise<TipoActivo[]>;
  constructor(private activoService: TipoActivosService) { }

  ngOnInit() {
    this.activos = this.activoService.getAllTiposActivo();
  }

}

import { Component, OnInit } from '@angular/core';
import { TipoActivo } from 'app/shared/models/TipoActivo';
import { TipoActivosService } from 'app/shared/services/tipoactivos.service';

@Component({
  selector: 'app-list-tipoactivo',
  templateUrl: './list-tipoactivo.component.html',
  styleUrls: ['./list-tipoactivo.component.scss']
})
export class ListTipoactivoComponent implements OnInit {
  tipoactivos: Promise<TipoActivo[]>;
  constructor(private tipoactivoService: TipoActivosService) { }

  ngOnInit() {
    this.tipoactivos = this.tipoactivoService.getAllTiposActivo();
  }

}

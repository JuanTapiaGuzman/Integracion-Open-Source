import { Component, OnInit } from '@angular/core';
import { Activo } from 'app/shared/models/Activo';
import { ActivosService } from 'app/shared/services/activos.service';

@Component({
  selector: 'app-list-activo',
  templateUrl: './list-activo.component.html',
  styleUrls: ['./list-activo.component.scss']
})
export class ListActivoComponent implements OnInit {
  activos: Promise<Activo[]>;
  constructor(private activoService: ActivosService) { }

  ngOnInit() {
    this.activos = this.activoService.getAllActivos();
  }

}

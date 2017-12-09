import { Component, OnInit } from '@angular/core';
import { Activo } from 'app/shared/models/Activo';
import { ActivosService } from 'app/shared/services/activos.service';
import { ActivatedRoute } from '@angular/router/';
import { Params } from '@angular/router';

@Component({
  selector: 'app-detail-activo',
  templateUrl: './detail-activo.component.html',
  styleUrls: ['./detail-activo.component.scss']
})
export class DetailActivoComponent implements OnInit {
  activo: Activo;
	constructor(private activoService: ActivosService,
              private route: ActivatedRoute) { }
              
  ngOnInit() {
      this.route.params
      .switchMap((params: Params) => this.activoService.getActivo(+params['activo-id']))
      .subscribe(activo => this.activo = activo);
  }	
}

import { Component, OnInit } from '@angular/core';
import { Departamento } from 'app/shared/models/Departamento';
import { DepartamentosService } from 'app/shared/services/departamentos.service';
import { ActivatedRoute } from '@angular/router/';
import { Params } from '@angular/router';

@Component({
  selector: 'app-detail-departamento',
  templateUrl: './detail-departamento.component.html',
  styleUrls: ['./detail-departamento.component.scss']
})
export class DetailDepartamentoComponent implements OnInit {
  departamento: Departamento;
	constructor(private departamentoService: DepartamentosService,
              private route: ActivatedRoute) { }
              
    ngOnInit() {
       this.route.params
        .switchMap((params: Params) => this.departamentoService.getDepartamento(+params['departamento-id']))
        .subscribe(departamento => this.departamento = departamento);
    }	
}

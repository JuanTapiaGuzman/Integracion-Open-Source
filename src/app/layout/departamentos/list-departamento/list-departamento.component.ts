import { Component, OnInit } from '@angular/core';
import { Departamento } from 'app/shared/models/Departamento';
import { DepartamentosService } from 'app/shared/services/departamentos.service';

@Component({
  selector: 'app-list-departamento',
  templateUrl: './list-departamento.component.html',
  styleUrls: ['./list-departamento.component.scss']
})
export class ListDepartamentoComponent implements OnInit {
  departamentos: Promise<Departamento[]>;
  constructor(private departamentoService: DepartamentosService) { }

  ngOnInit() {
    this.departamentos = this.departamentoService.getAllDepartamentos();
  }

}

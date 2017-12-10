import { Component, OnInit } from '@angular/core';
import { Activo } from 'app/shared/models/Activo';
import { ActivosService } from 'app/shared/services/activos.service';
import { Entry } from 'app/shared/models/Entry';

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

  edit(descripcion, amount, id){
    let entry = new Entry();
    
    //let activoService = this.activoService.getCalculoDepreciacion(id);

    entry.Description = descripcion;
    entry.AuxiliarId = 3;
    entry.AccountId = 1;
    entry.MovementType = "CR",
    entry.EntryDate = "2017-12-07T07:42:32.3268517+00:00";
    entry.EntryAmount = amount;
    entry.CurreyncyType = "DO";

    this.activoService.postEntry(entry);
    
    entry.Description = descripcion;
    entry.AuxiliarId = 3;
    entry.AccountId = 1;
    entry.MovementType = "DB",
    entry.EntryDate = "2017-12-07T07:42:32.3268517+00:00";
    entry.EntryAmount = amount;
    entry.CurreyncyType = "DO";

    this.activoService.postEntry(entry);
  }

}

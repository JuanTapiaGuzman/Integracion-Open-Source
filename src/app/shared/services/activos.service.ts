import { Injectable } from '@angular/core';
import { Activo } from 'app/shared/models/activo';
import 'rxjs/add/operator/toPromise';
import {Http, Headers, RequestOptions} from '@angular/http';
import { Entry } from 'app/shared/models/Entry';
import { CalculoDepreciacion } from 'app/shared/models/CalculoDepreciacion';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ActivosService {
  private url: string = "http://activosfijosapi20171107045022.azurewebsites.net/Api/Activo/";
  private urlEntries: string = "http://accountingsystem.azurewebsites.net/api/entries/";
  private urlCalculoDepreciacion: string = "http://accountingsystem.azurewebsites.net/api/CalculoDepreciacion/";

  result: JSON;

  constructor(private http: Http) {}

  postEntry(entry: Entry): Promise<Entry> {
    let headers = new Headers({ 'Content-Type': 'application/json' });

    headers.append('Accept', `GET,POST,PUT,OPTIONS`);
    let options = new RequestOptions({ headers: headers });

    console.log(entry);

    return this.http
      .post(this.urlEntries, JSON.stringify(entry), options)
      .toPromise()
      .then(res => res.json() as Entry)
      .catch(this.handleError);
  }

  getCalculoDepreciacion(id: number): Promise<CalculoDepreciacion> {
    return this.http.get(this.urlCalculoDepreciacion + id)
    .toPromise()
    .then(response => response.json().asientoContable as CalculoDepreciacion)
    .catch(this.handleError);
  }

  getAllActivos(): Promise<Activo[]> {
    return this.http.get(this.url)
      .toPromise()
      .then(response => response.json().activos as Activo[])
      .catch(this.handleError);
  }

  getActivo(id: number): Promise<Activo> {
    return this.http.get(this.url + id)
      .toPromise()
      .then(response => response.json().activo as Activo)
      .catch(this.handleError);
  }

  postActivo(activo: Activo): Promise<Activo> {
    let headers = new Headers({ 'Content-Type': 'application/json' });

    headers.append('Accept', `GET,POST,PUT,OPTIONS`);
    let options = new RequestOptions({ headers: headers });

    return this.http
      .post(this.url, JSON.stringify(activo), options)
      .toPromise()
      .then(res => res.json() as Activo)
      .catch(this.handleError);
  }

  updateActivo(activo: Activo): Promise<Activo> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http
      .put(this.url + activo.Id, JSON.stringify(activo), options)
      .toPromise()
      .then(() => activo)
      .catch(this.handleError);
  }

  deleteActivo(activo: Activo): Promise<void> {
    return this.http.delete(this.url + activo.Id)
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }  
}

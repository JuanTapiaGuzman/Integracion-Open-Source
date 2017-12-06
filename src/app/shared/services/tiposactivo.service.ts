import { Injectable } from '@angular/core';
import { TipoActivo } from 'app/shared/models/TipoActivo';
import 'rxjs/add/operator/toPromise';
import { Http } from '@angular/http';

@Injectable()
export class TiposActivoService {
  private url: string = "http://activosfijosapi20171107045022.azurewebsites.net/Api/TipoActivo/";
  result: JSON;

  constructor(private http: Http) {}
    
    private headers = new Headers({ 'Content-Type': 'application/json' });
    
     getAllTiposActivo(): Promise<TipoActivo[]> {
       return this.http.get(this.url)
         .toPromise()
         .then(response => response.json().tipoActivos as TipoActivo[])
         .catch(this.handleError);
     }
    
     getTipoActivo(id: number): Promise<TipoActivo> {
       return this.http.get(this.url + id)
         .toPromise()
         .then(response => response.json().tipoActivo as TipoActivo)
         .catch(this.handleError);
     }
    
     postTipoActivo(tipoActivo: TipoActivo): Promise<TipoActivo> {
       return this.http
         .post(this.url, JSON.stringify(tipoActivo))
         .toPromise()
         .then(res => res.json() as TipoActivo)
         .catch(this.handleError);
     }
    
     updateTipoActivo(tipoActivo: TipoActivo): Promise<TipoActivo> {
       return this.http
         .put(this.url + tipoActivo.Id, JSON.stringify(tipoActivo))
         .toPromise()
         .then(() => tipoActivo)
         .catch(this.handleError);
     }
    
     deleteTipoActivo(tipoActivo: TipoActivo): Promise<void> {
       return this.http.delete(this.url + tipoActivo.Id)
         .toPromise()
         .then(() => null)
         .catch(this.handleError);
     }
    
     private handleError(error: any): Promise<any> {
       console.error('An error occurred', error);
       return Promise.reject(error.message || error);
     }  
}

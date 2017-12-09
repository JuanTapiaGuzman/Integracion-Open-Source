import { Injectable } from '@angular/core';
import { AsientoContable } from 'app/shared/models/asientocontable';
import 'rxjs/add/operator/toPromise';
import { Http } from '@angular/http';

@Injectable()
export class AsientosContableService {
  private url: string = "http://activosfijosapi20171107045022.azurewebsites.net/Api/AsientoContable/";
  result: JSON;

  constructor(private http: Http) {}
    
    private headers = new Headers({ 'Content-Type': 'application/json' });
    
     getAllAsientoContable(): Promise<AsientoContable[]> {
       return this.http.get(this.url)
         .toPromise()
         .then(response => response.json().AsientoContable as AsientoContable[])
         .catch(this.handleError);
     }
    
     getAsientoContable(id: number): Promise<AsientoContable> {
       return this.http.get(this.url + id)
         .toPromise()
         .then(response => response.json().asientoContable as AsientoContable)
         .catch(this.handleError);
     }
    
     postAsientoContable(asientoContable: AsientoContable): Promise<AsientoContable> {
       return this.http
         .post(this.url, JSON.stringify(asientoContable))
         .toPromise()
         .then(res => res.json() as AsientoContable)
         .catch(this.handleError);
     }
    
     updateAsientoContable(asientoContable: AsientoContable): Promise<AsientoContable> {
       return this.http
         .put(this.url + asientoContable.Id, JSON.stringify(asientoContable))
         .toPromise()
         .then(() => asientoContable)
         .catch(this.handleError);
     }
    
     deleteAsientoContable(asientoContable: AsientoContable): Promise<void> {
       return this.http.delete(this.url + asientoContable.Id)
         .toPromise()
         .then(() => null)
         .catch(this.handleError);
     }
    
     private handleError(error: any): Promise<any> {
       console.error('An error occurred', error);
       return Promise.reject(error.message || error);
     }  
}

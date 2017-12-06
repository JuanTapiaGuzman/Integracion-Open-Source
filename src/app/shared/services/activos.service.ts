import { Injectable } from '@angular/core';
import { Activo } from 'app/shared/models/activo';
import 'rxjs/add/operator/toPromise';
import { Http } from '@angular/http';

@Injectable()
export class ActivosService {
  private url: string = "http://activosfijosapi20171107045022.azurewebsites.net/Api/Activo/";
  result: JSON;

  constructor(private http: Http) {}
    
    private headers = new Headers({ 'Content-Type': 'application/json' });
    
     getAllActivos(): Promise<Activo[]> {
       return this.http.get(this.url)
         .toPromise()
         .then(response => response.json().activos as Activo[])
         .catch(this.handleError);
     }
    
     getActivo(id: number): Promise<Activo> {
       return this.http.get(this.url)
         .toPromise()
         .then(response => response.json().activo as Activo)
         .catch(this.handleError);
     }
    
     postActivo(activo: Activo): Promise<Activo> {
       return this.http
         .post(this.url, JSON.stringify(activo))
         .toPromise()
         .then(res => res.json() as Activo)
         .catch(this.handleError);
     }
    
     updateActivo(activo: Activo): Promise<Activo> {
       return this.http
         .put(this.url, JSON.stringify(activo))
         .toPromise()
         .then(() => activo)
         .catch(this.handleError);
     }
    
     deleteActivo(activo: Activo): Promise<void> {
       return this.http.delete(this.url)
         .toPromise()
         .then(() => null)
         .catch(this.handleError);
     }
    
     private handleError(error: any): Promise<any> {
       console.error('An error occurred', error);
       return Promise.reject(error.message || error);
     }  
}

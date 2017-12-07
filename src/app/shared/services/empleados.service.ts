import { Injectable } from '@angular/core';
import { Empleado } from 'app/shared/models/empleado';
import 'rxjs/add/operator/toPromise';
import { Http } from '@angular/http';

@Injectable()
export class EmpleadosService {
  private url: string = "http://activosfijosapi20171107045022.azurewebsites.net/Api/Empleado/";
  result: JSON;

  constructor(private http: Http) {}
    
    private headers = new Headers({ 'Content-Type': 'application/json' });
    
     getAllEmpleados(): Promise<Empleado[]> {
       return this.http.get(this.url)
         .toPromise()
         .then(response => response.json().empleados as Empleado[])
         .catch(this.handleError);
     }
    
     getEmpleado(id: number): Promise<Empleado> {
       return this.http.get(this.url + id)
         .toPromise()
         .then(response => response.json().empleado as Empleado)
         .catch(this.handleError);
     }
    
     postEmpleado(empleado: Empleado): Promise<Empleado> {
       return this.http
         .post(this.url, JSON.stringify(empleado))
         .toPromise()
         .then(res => res.json() as Empleado)
         .catch(this.handleError);
     }
    
     updateEmpleado(empleado: Empleado): Promise<Empleado> {
       return this.http
         .put(this.url, JSON.stringify(empleado))
         .toPromise()
         .then(() => empleado)
         .catch(this.handleError);
     }
    
     deleteEmpleado(empleado: Empleado): Promise<void> {
       return this.http.delete(this.url + empleado.Id)
         .toPromise()
         .then(() => null)
         .catch(this.handleError);
     }
    
     private handleError(error: any): Promise<any> {
       console.error('An error occurred', error);
       return Promise.reject(error.message || error);
     }  
}

import { Injectable } from '@angular/core';
import { Departamento } from 'app/shared/models/departamento';
import 'rxjs/add/operator/toPromise';
import { Http } from '@angular/http';
import { RequestOptions } from '@angular/http';

@Injectable()
export class DepartamentosService {
  private url: string = "http://activosfijosapi20171107045022.azurewebsites.net/Api/Departamento/";
  result: JSON;

  constructor(private http: Http) {}
    
    private headers = new Headers({ 'Content-Type': 'application/json' });
    
     getAllDepartamentos(): Promise<Departamento[]> {
       return this.http.get(this.url)
         .toPromise()
         .then(response => response.json().departamentos as Departamento[])
         .catch(this.handleError);
     }
    
     getDepartamento(id: number): Promise<Departamento> {
       return this.http.get(this.url + id)
         .toPromise()
         .then(response => response.json().departamento as Departamento)
         .catch(this.handleError);
     }
    
     postDepartamento(departamento: Departamento): Promise<Departamento> {
       return this.http
         .post(this.url, JSON.stringify(departamento))
         .toPromise()
         .then(res => res.json() as Departamento)
         .catch(this.handleError);
     }
    
     updateDepartamento(departamento: Departamento): Promise<Departamento> {
       return this.http
         .put(this.url, JSON.stringify(departamento))
         .toPromise()
         .then(() => departamento)
         .catch(this.handleError);
     }
    
     deleteDepartamento(departamento: Departamento): Promise<void> {
       return this.http.delete(this.url + departamento.Id)
         .toPromise()
         .then(() => null)
         .catch(this.handleError);
     }
    
     private handleError(error: any): Promise<any> {
       console.error('An error occurred', error);
       return Promise.reject(error.message || error);
     }  
}

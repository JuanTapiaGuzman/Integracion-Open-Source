import { Injectable } from '@angular/core';
import { Departamento } from 'app/shared/models/departamento';
import 'rxjs/add/operator/toPromise';
import { Http } from '@angular/http';

@Injectable()
export class DepartamentosService {
  private url: string = "http://activosfijosapi20171107045022.azurewebsites.net/Api/Departamento/";
  result: JSON;

  constructor(private http: Http) {}
    
    //  private headers = new Headers({ 'Content-Type': 'application/json' });
    //  private bikesUrl = 'api/bikes';
    
     getAllDepartamentos(): Promise<Departamento[]> {
       return this.http.get(this.url)
         .toPromise()
         .then(response => response.json().departamentos as Departamento[])
         .catch(this.handleError);
     }
    
    
     getDepartamento(id: number): Promise<Departamento> {
       return this.http.get(this.url)
         .toPromise()
         .then(response => response.json().departamento as Departamento)
         .catch(this.handleError);
     }
    
    
    //  createBike(bike: Bike): Promise<Bike> {
    //    return this.http
    //      .post(this.bikesUrl, JSON.stringify(bike), { headers: this.headers })
    //      .toPromise()
    //      .then(res => res.json().data as Bike)
    //      .catch(this.handleError);
    //  }
    
    //  updateBike(bike: Bike): Promise<Bike> {
    //    const url = `${this.bikesUrl}/${bike.id}`;
    //    return this.http
    //      .put(url, JSON.stringify(bike), { headers: this.headers })
    //      .toPromise()
    //      .then(() => bike)
    //      .catch(this.handleError);
    //  }
    
    //  deleteBike(bike: Bike): Promise<void> {
    //    const url = `${this.bikesUrl}/${bike.id}`;
    //    return this.http.delete(url, { headers: this.headers })
    //      .toPromise()
    //      .then(() => null)
    //      .catch(this.handleError);
    //  }
    
     private handleError(error: any): Promise<any> {
       console.error('An error occurred', error);
       return Promise.reject(error.message || error);
     }

//   getAllDepartamentos() {
//     let result: any;
//     this.http.get(this.url).subscribe(response => {
//        result = response.json().departamentos
//     });
//     return result;
//   }

//   getDepartamento(id: number) {
//     return this.http.get(this.url + id.toString()).map( response => response.json().departamentos);
//   }

  postDepartamento(departamento: Departamento){
    this.http.post(this.url, departamento)
    .subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log("Error occured");
      }
    );
  }

  putDepartamento(departamento: Departamento){
    this.http.post(this.url + departamento.Id, departamento)
    .subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log("Error occured");
      }
    );
  }

  deleteDepartamento(id: number){
    this.http.delete(this.url + id)
    .subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log("Error occured");
      }
    );
  }
}

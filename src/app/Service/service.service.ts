import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Articulo } from '../Modelo/Articulo';
import { Observable } from 'rxjs';

@Injectable( )
export class ServiceService {
  constructor(private http:HttpClient) { }
  Url='http://localhost:8080/articulos/' //'http://localhost:8080/CatalogoBackend/articulos/'

  getAllArticulos(){
    return this.http.get<Articulo[]>(this.Url);
  }
  crearArticulo(articulo: any): Observable<any>{
    return this.http.post(this.Url,articulo);
  }
  getArticuloId(id:number){
    return this.http.get<Articulo>(this.Url+"/"+id);
  }
  updateArticulo(persona:Articulo){
    return this.http.put<Articulo>(this.Url+"/"+persona.id,persona);
  }
  deleteArticulo(persona:Articulo){
    return this.http.delete<Articulo>(this.Url+"delete/"+persona.id);
  }


}

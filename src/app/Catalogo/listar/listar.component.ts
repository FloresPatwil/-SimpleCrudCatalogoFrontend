import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Articulo } from 'src/app/Modelo/Articulo';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-listar', 
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit{

  articulos: Articulo[] = [];
  constructor(private service:ServiceService, private router:Router){}

  ngOnInit() {
    this.service.getAllArticulos()
      .subscribe((data: Articulo[]): void=>{
        this.articulos=data;
      });
    
  }
  Editar(articulo:Articulo):void{
    localStorage.setItem("id",articulo.id.toString());
    this.router.navigate(["edit"]);
  }
  /*
  Delete(articulo:Articulo){
    this.service.deletePersona(articulo)
    .subscribe(data=>{
      this.articulos=this.articulos.filter(p=>p!==articulo);
      alert("Usuario eliminado...");
    })
  }
  */

}

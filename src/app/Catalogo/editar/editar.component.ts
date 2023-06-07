import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Articulo } from 'src/app/Modelo/Articulo';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent  implements OnInit{
  articulo : Articulo=new Articulo();
  constructor(private router:Router,private service:ServiceService){}

  ngOnInit(): void {
      //this.Editar();
  }
  /*
  Editar(){
    let id=localStorage.getItem("id");
    this.service.getArticuloId(+id)
    .subscribe(data=>{
      this.articulo=data;
    })

  }
  */

  Actualizar(articulo:Articulo){
    this.service.updateArticulo(articulo)
    .subscribe(data=>{
      this.articulo=data;
      alert("Se Actualizo con Exito...!!!");
      this.router.navigate(["listar"]);
    })
  }

}

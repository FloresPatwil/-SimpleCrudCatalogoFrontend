import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Articulo } from 'src/app/Modelo/Articulo';
import { ServiceService } from 'src/app/Service/service.service';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit{
  
  articulo: Articulo = new Articulo();
  constructor(
    private router:Router,
    private service:ServiceService){  }
  ngOnInit() {
    // TODO document why this method 'ngOnInit' is empty
  
  }
  Guardar(){
    console.log(this.articulo);
    this.service.crearArticulo(this.articulo)
    .subscribe(data=>{
      alert("Se Agrego con Exito!!!");    //CORREGIR
      this.router.navigate(["listar"]);
    })
  }
}

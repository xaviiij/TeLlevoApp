import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SAutosService } from 'src/app/Services/sautos.service';
import { IAuto } from 'src/app/interfaces/iauto';

@Component({
  selector: 'app-add-autos',
  templateUrl: './add-autos.page.html',
  styleUrls: ['./add-autos.page.scss'],
})
export class AddAutosPage implements OnInit {

  newAuto:IAuto ={

    nombre: "",
    rut: "",
    patente: "",
    capacidad: 0,
    metodo_de_pago: "",
    comuna: "",
    precio: 0,


  }


  constructor(private autoServ:SAutosService,private router:Router) { }

  ngOnInit() {
  }

  crearAuto(){
    this.autoServ.crearAuto(this.newAuto).subscribe()
    this.router.navigateByUrl("/movilizacion")
    

  }

}

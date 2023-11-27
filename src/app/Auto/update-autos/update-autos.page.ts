import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SAutosService } from 'src/app/Services/sautos.service';

@Component({
  selector: 'app-update-autos',
  templateUrl: './update-autos.page.html',
  styleUrls: ['./update-autos.page.scss'],
})
export class UpdateAutosPage {
  Auto={
    id:0,
    nombre: "",
    rut: "",
    patente: "",
    capacidad: 0,
    metodo_de_pago: "",
    comuna: "",
    precio: 0

  }
  constructor(private autoServ:SAutosService, private router:Router) { }
  
  ionViewWillEnter(){
    this.getAutoByID(this.getIdFromURL())
  }




  getIdFromURL(){
    let url = this.router.url
    let arr = url.split("/",3)
    let id = parseInt(arr[2])
    return id

  }

  getAutoByID(autoID:number){
    this.autoServ.getAutoByID(autoID).subscribe(
      (resp:any) => {
        this.Auto = {
          id: resp[0].id,
          nombre: resp[0].nombre,
          rut: resp[0].rut,
          patente: resp[0].patente,
          capacidad: resp[0].capacidad,
          metodo_de_pago: resp[0].metodo_de_pago,
          comuna: resp[0].comuna,
          precio: resp[0].precio


        }
      }
    )
  }

  updateAuto(){
    this.autoServ.actualizarAuto(this.Auto).subscribe()
    this.router.navigateByUrl("/movilizacion")
  }
}

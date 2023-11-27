import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { SAutosService } from 'src/app/Services/sautos.service';
import { IAuto } from 'src/app/interfaces/iauto';
import { IAutos } from 'src/app/interfaces/iautos';

@Component({
  selector: 'app-movilizacion',
  templateUrl: './movilizacion.page.html',
  styleUrls: ['./movilizacion.page.scss']
})

export class MovilizacionPage {



  public Autos!: IAutos[];

  constructor(private AutoServ: SAutosService, private LoadingCtrl: LoadingController) { }

  ionViewWillEnter() {
    this.loadAutos()
  }
  async loadAutos(event?: InfiniteScrollCustomEvent) {
    const loading = await this.LoadingCtrl.create({
      message: "Cargando...",
      spinner: "bubbles"
    }
    );
    await loading.present();

    this.AutoServ.listarAutos().subscribe(
      (resp) => {

        loading.dismiss();
        let listString = JSON.stringify(resp)
        this.Autos = JSON.parse(listString)
        event?.target.complete();
        console.log(this.Autos)
      },
      (err) => {
        console.log(err.message)
        loading.dismiss();
      }

    )

  }

}

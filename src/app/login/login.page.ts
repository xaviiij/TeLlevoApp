import { Component, OnInit,ElementRef,ViewChild} from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { GoogleMap, Marker } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild('map')mapRef!: ElementRef;
  map!: GoogleMap;

  constructor(private router: Router, private activatedRouter: ActivatedRoute, private authGuard: AuthGuard) { }
  ionViewDidEnter() {
    this.createMap();
  }

  async createMap() {
    this.map= await GoogleMap.create({
      id: 'my-map',
      apiKey: environment.mapKey,
      element: this.mapRef.nativeElement,
      config: {
        center: {
          lat: -33.43479,
          lng: -70.61422,
        },
        zoom: 15,
      },
    });
    this.addMarkers();

  }

  async addMarkers() {
    const markers: Marker[] =[
      {
        coordinate : { 
          lat: -33.433002979786, 
          lng: -70.61490670534253,
        },
        title: 'localhost',
        snippet: 'Best place on earth',
      },
      {
        coordinate: {
          lat: -33.4334756551049, 
          lng: -70.63348109308943
        },
        title: 'random place',
        snippet: 'Not sure',
      }
    ]; 

    await this.map.addMarkers(markers);
  }

  public alertButtons = ['OK'];
  public user = {
    usuario: "",
    password: ""
  }
  public informacion = {
    nombre: "",
    apellido: "",
    nivel: "",
    fecha: ""
  }

  ngOnInit() {
    this.activatedRouter.queryParams.subscribe(() => {
      let state = this.router.getCurrentNavigation()?.extras.state;
      if (state) {
        this.user.usuario = state['user'].usuario;
        this.user.password = state['user'].password;
        console.log(this.user);
      }
    })
  }
}



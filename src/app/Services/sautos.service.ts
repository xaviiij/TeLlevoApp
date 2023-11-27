import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAutos } from '../interfaces/iautos';
import { environment } from 'src/environments/environment';
import { IAuto } from '../interfaces/iauto';


@Injectable({
  providedIn: 'root'
})
export class SAutosService {

  constructor(private http:HttpClient) { }

  listarAutos():Observable<IAutos>{
    return this.http.get<IAutos>(`${environment.apiURL}/Auto`)
  }

  crearAuto(newAuto:IAuto):Observable<IAuto>{
    return this.http.post<IAuto>(`${environment.apiURL}/Auto`,newAuto)
  }

  getAutoByID(id:number):Observable<IAutos>{
    return this.http.get<IAutos>(`${environment.apiURL}/Auto/?id=${id}`)
  }

  actualizarAuto(auto:any):Observable<IAutos>{
    return this.http.put<IAutos>(`${environment.apiURL}/Auto/${auto.id}`,auto)
  }

  eliminarAuto(auto:any):Observable<IAutos>{
    return this.http.delete<IAutos>(`${environment.apiURL}/Auto/${auto.id}`)
  }
  
}

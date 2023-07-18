import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LatLngLiteral } from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class LoactionService {

  constructor() { }

  getcurrentloaction():Observable<LatLngLiteral>{
    return new Observable((Observer)=>{
      if(!navigator.geolocation)return;

      return navigator.geolocation.getCurrentPosition(
        (pos)=>{
          Observer.next({
            lat:pos.coords.latitude,
            lng:pos.coords.longitude
          })
        },
        (error)=>{
          Observer.error(error);
        }
      )
    })
  }
}

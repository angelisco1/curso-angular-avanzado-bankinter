import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PushService {
  private URL: string = 'http://localhost:3000/suscripciones'

  constructor(private http: HttpClient) { }

  createSuscripcionPush(suscripcion: PushSubscription): Observable<any> {
    return this.http.post(this.URL, suscripcion)
  }

}

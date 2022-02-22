import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Oferta } from './oferta';

@Injectable({
  providedIn: 'root'
})
export class OfertasService {
  private URL: string = 'http://localhost:3000/ofertas'

  constructor(private http: HttpClient) {}

  getOfertas(): Observable<Array<Oferta>> {
    return this.http.get<Array<Oferta>>(this.URL)
  }

  getOfertaById(id: string): Observable<Oferta> {
    return this.http.get<Oferta>(this.URL + '/' + id)
  }

  createOferta(nuevaOferta: Oferta) {
    // return this.http.post(this.URL, nuevaOferta)
    return this.http.post('http://localhost:3005/ofertas', nuevaOferta)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Oferta } from './oferta';

/**
 * Servicio para interactuar con la API de las ofertas de trabajo
 */
@Injectable({
  providedIn: 'root'
})
export class OfertasService {
  /**
   * URL de la API de ofertas
   */
  private URL: string = 'http://localhost:3000/ofertas'

  /**
   * @ignore
   */
  constructor(private http: HttpClient) {}

  /**
   * Pide las ofertas de trabajao a la API y nos las devuelve
   * @returns un observable con el array de ofertas
   */
  getOfertas(): Observable<Array<Oferta>> {
    return this.http.get<Array<Oferta>>(this.URL)
  }

  /**
   * Pide a la API los datos de una oferta dado su identificador
   * @param id identificador de la oferta que queremos obtener
   * @returns un observable con la oferta cuyo identificador le hemos pasado como parámetro
   *
   * @example <caption>Ejemplo de id como numero</caption>
   * getOfertaById('1111')
   *
   * @example <caption>Ejemplo de id como ruta</caption>
   * getOfertaById('proyecto1%7Farchivo2')
   */
  getOfertaById(id: string): Observable<Oferta> {
    return this.http.get<Oferta>(this.URL + '/' + id)
  }

  /**
   * Envia a la API una nueva oferta para guardarla en la BBDD
   * @param nuevaOferta datos de la oferta que queremos crear
   * @returns algo
   */
  createOferta(nuevaOferta: Oferta) {
    // return this.http.post(this.URL, nuevaOferta)
    return this.http.post('http://localhost:3005/ofertas', nuevaOferta)
  }
}

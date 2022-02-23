import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, map, Observable } from 'rxjs';
import { IProducto } from '../interfaces/app.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private URL: string = 'https://ejemplos-dc1c1.firebaseio.com/angular-bankinter/productos'

  constructor(private http: HttpClient) { }

  getProductos(): Observable<Array<IProducto>> {
    return this.http.get(`${this.URL}.json`)
      .pipe(
        delay(2000),
        map((objProductos: any) => {
          return Object.values(objProductos)
        })
      )
  }
}

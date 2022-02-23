import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DigimonsService {
  private URL: string = 'https://digimon-api.vercel.app/api'
  private URL_NUEVOS: string = 'http://localhost:4200/api/nuevos-digimons'

  constructor(private http: HttpClient) { }

  getDigimons() {
    return this.http.get(`${this.URL}/digimon`)
  }

  getDigimonByName(name: string) {
    return this.http.get(`${this.URL}/digimon/name/${name}`)
      .pipe(
        map((digimons: any) => digimons[0])
      )
  }

  getDigimonsByLevel(level: string) {
    return this.http.get(`${this.URL}/digimon/level/${level}`)
  }

  getNuevosDigimons() {
    return this.http.get(this.URL_NUEVOS)
  }

  createNuevoDigimon(nuevoDigimon: any) {
    return this.http.post(this.URL_NUEVOS, nuevoDigimon)
  }
}

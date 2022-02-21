import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MiRouterService {
  rutaCambiada$ = new BehaviorSubject('/')

  constructor() { }

  navigate(segmentos: Array<string>): void {
    const url = segmentos.join('/')
    window.history.pushState(null, '', url)
    this.rutaCambiada$.next(url)
  }
}

import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, keyframes, style } from '@angular/animations';

@Component({
  selector: 'app-cmp-shake',
  templateUrl: './cmp-shake.component.html',
  styleUrls: ['./cmp-shake.component.css'],
  animations: [
    trigger('shake', [
      transition('no-shaking <=> shaking', [
        animate(600, keyframes([
          style({ transform: 'rotate(0deg)', offset: 0 }),
          style({ transform: 'rotate(90deg)', offset: 0.2 }),
          style({ transform: 'rotate(-90deg)', offset: 0.4 }),
          style({ transform: 'rotate(90deg)', offset: 0.6 }),
          style({ transform: 'rotate(-90deg)', offset: 0.8 }),
          style({ transform: 'rotate(0deg)', offset: 1 }),
        ]))
      ])
    ]),
    trigger('elastic', [
      transition('on <=> off', [
        animate(600, keyframes([
          style({ backgroundColor: 'white', offset: 0 }),
          style({ backgroundColor: 'yellow', offset: 0.16 }),
          style({ backgroundColor: 'blue', offset: 0.28 }),
          style({ backgroundColor: 'white', offset: 1 }),
        ]))
      ])
    ]),
  ]
})
export class CmpShakeComponent implements OnInit {
  shakeState: string = 'no-shaking'
  elasticState: string = 'off'

  constructor() { }

  ngOnInit(): void {
  }

  cambiarEstado() {
    this.shakeState = this.shakeState === 'shaking' ? 'no-shaking' : 'shaking'
    this.elasticState = this.elasticState === 'off' ? 'on' : 'off'
  }

}

import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-zoom',
  templateUrl: './cmp-zoom.component.html',
  styleUrls: ['./cmp-zoom.component.css'],
  animations: [
    trigger('zoom', [
      state('zoom', style({
        transform: 'scale(2)'
      })),
      state('sin-zoom', style({
        transform: 'scale(1)'
      })),
      transition('zoom <=> sin-zoom', animate('600ms 300ms cubic-bezier(0.36, 0, 0.66, -0.56)'))
    ])
  ]
})
export class CmpZoomComponent implements OnInit {
  zoomState: string = 'sin-zoom'

  constructor() { }

  ngOnInit(): void {
  }

  cambiarEstado() {
    this.zoomState = this.zoomState === 'zoom' ? 'sin-zoom' : 'zoom'
  }
}

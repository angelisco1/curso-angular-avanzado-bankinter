import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from '../cmp03-viewchild/modal/modal.component';
import { AudioComponent } from './audio/audio.component';
import { HostDirective } from './host.directive';
import { VideoComponent } from './video/video.component';

@Component({
  selector: 'app-cmp04-componentes-dinamicos',
  templateUrl: './cmp04-componentes-dinamicos.component.html',
  styleUrls: ['./cmp04-componentes-dinamicos.component.css']
})
export class Cmp04ComponentesDinamicosComponent implements OnInit {
  @ViewChild(HostDirective) host!: HostDirective;
  @ViewChild(ModalComponent) modal!: ModalComponent;

  mediaItems = [
    { titulo: 'Plato 1', src: 'assets/video1.mp4', tipo: 'video' },
    { titulo: 'Plato 2 al vino', src: 'assets/video2.mp4', tipo: 'video' },
    { titulo: 'Remind my self', src: 'assets/audio1.mp3', tipo: 'audio' },
    { titulo: 'Funk it is', src: 'assets/audio2.mp3', tipo: 'audio' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  abrir(item: any): void {
    this.host.viewContainerRef.clear()
    const classCmp = item.tipo === 'audio' ? AudioComponent : VideoComponent
    const cmp = this.host.viewContainerRef.createComponent(classCmp)
    cmp.instance.src = item.src
    this.modal.abrirModal()
  }

}

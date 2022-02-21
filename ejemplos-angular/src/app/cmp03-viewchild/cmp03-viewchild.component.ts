import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-cmp03-viewchild',
  templateUrl: './cmp03-viewchild.component.html',
  styleUrls: ['./cmp03-viewchild.component.css']
})
export class Cmp03ViewchildComponent implements OnInit {

  @ViewChild(ModalComponent) modal!: ModalComponent;

  constructor() { }

  ngOnInit(): void {

  }

  mostrarLogin() {
    this.modal.abrirModal();
  }

}

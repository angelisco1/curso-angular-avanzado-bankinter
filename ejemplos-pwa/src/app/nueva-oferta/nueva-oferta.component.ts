import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OfertasService } from '../ofertas.service';

@Component({
  selector: 'app-nueva-oferta',
  templateUrl: './nueva-oferta.component.html',
  styleUrls: ['./nueva-oferta.component.css']
})
export class NuevaOfertaComponent implements OnInit {
  formOferta: FormGroup

  constructor(private ofertasService: OfertasService, private router: Router) {
    this.formOferta = new FormGroup({
      titulo: new FormControl('', Validators.required),
      empresa: new FormControl('Empresa 1', Validators.required),
      salario: new FormControl(20000, Validators.required),
      ciudad: new FormControl('madrid', Validators.required),
      descripcion: new FormControl('Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem placeat architecto quisquam quam hic deserunt at amet dolorum quia, error rem delectus fugiat soluta enim deleniti esse magni fuga nisi.', Validators.required),
    })
  }

  ngOnInit(): void {
  }

  guardar() {
    const valorForm = this.formOferta.value
    this.ofertasService.createOferta(valorForm)
      .subscribe(() => {
        this.router.navigate(['/'])
      })
  }

}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  usuario = {
    nombre: 'Sherlin',
    apellido: 'Toriz Pérez',
    correo: 'sherlintp09@gmail.com',
    pais: 'CRI',
    genero: 'F'
  }
  
  paises: any[] = [];

  constructor( private paisServise: PaisService) { }

  ngOnInit(): void {

    this.paisServise.getPaises()
    .subscribe( paises => {
      this.paises = paises;

      this.paises.unshift({
        nombre: '[Seleccione Pais]',
        codigo: ''
      })
    });

  }

  guardar( forma: NgForm ) {
    console.log( forma );


    if (forma.invalid){

      Object.values(forma.controls).forEach( control => {
        control.markAsTouched();
      });

      return;

    }
    console.log( forma.value );
  }

}

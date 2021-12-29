import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  initialForm = {
    producto: 'RTX 4080Ti',
    precio: 0,
    existencias: 10
  }

  constructor() { }

  ngOnInit(): void {
  }

  productoValido():boolean{
    return this.miFormulario?.controls['producto']?.invalid 
            && this.miFormulario?.controls['producto']?.touched;
  }

  precioValido():boolean{
    return this.miFormulario?.controls['precio']?.value < 0 
            && this.miFormulario?.controls['precio']?.touched;
  }

  guardar(){
    console.log('Posteo correcto');
    this.miFormulario.resetForm({
      precio: 0,
      existencias: 0
    });
  }
}

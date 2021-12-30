import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl, Validator } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  miFormulario: FormGroup = this.formBuilder.group({
    nombre: [, [Validators.required, Validators.minLength(3)]],
    favoritos: this.formBuilder.array([
      ['Metal Gear', Validators.required],
      ['Death Stranding']
    ], Validators.required)
  });

  nuevoFavorito: FormControl = this.formBuilder.control('', Validators.required );

  constructor(private formBuilder: FormBuilder) { }

  get favoritosArray(){
    return this.miFormulario.get('favoritos') as FormArray;
  }

  ngOnInit(): void {
  }

  campoEsValido( campo: string){
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched;
  }

  borrar( index: number ){
    this.favoritosArray.removeAt(index);
  }

  guardar(){
    console.log(this.favoritosArray.controls)
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value)
  }

  agregarFavorito(){
    if(this.nuevoFavorito.invalid){
      return;
    }

    this.favoritosArray.push(new FormControl(this.nuevoFavorito.value, Validators.required));
    this.nuevoFavorito.reset();
  }
}

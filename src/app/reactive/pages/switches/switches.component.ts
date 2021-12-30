import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, Validator } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  miFormulario: FormGroup = this.formBuilder.group({
    genero: ['M', Validators.required],
    notificaciones: [],
    condiciones: [false, Validators.requiredTrue]
  })

  persona = {
    genero: 'F',
    notificaciones: true
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario.reset(this.persona);

    this.miFormulario.valueChanges.subscribe(form => {
      const propPersona = {...form};
      delete propPersona.condiciones;
      this.persona = propPersona;  
    });

    this.miFormulario.get('condiciones')?.valueChanges.subscribe(form => {
      console.log(form)
    });
  }

  guardar(){
    const formValue = {...this.miFormulario.value}
    delete formValue.condiciones;

    this.persona = formValue;
  }

}

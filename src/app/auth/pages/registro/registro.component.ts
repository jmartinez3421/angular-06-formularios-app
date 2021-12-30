import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ValidatorService } from '../../../shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.vs.nombreApellidoPattern)]],
    email: ['', [Validators.required, Validators.pattern(this.vs.emailPattern)], [this.emailValidator]],
    username: ['', [Validators.required, this.vs.noPuedeSerStrider]],
    password: ['', [Validators.required, Validators.pattern(this.vs.passwordPattern)]],
    password2: ['', [Validators.required]]
  },{
    validators: [ this.vs.camposIguales('password', 'password2') ]
  });

  get emailErrorMsg(): string{
    const errors = this.miFormulario.get('email')?.errors;

    if(errors?.['required']){
      return 'El email es obligatorio';
    }else if(errors?.['pattern']){
      return 'El texto no tiene formato de email (demo@gmail.com)';
    }else if(errors?.['emailUsado']){
      return 'Este email ya ha sido usado';
    }

    return '';
  }

  constructor(
    private fb: FormBuilder,
    private vs: ValidatorService,
    private emailValidator: EmailValidatorService
  ) { }

  ngOnInit(): void {
  }

  campoValido(campo: string){
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched;
  }

  submitFormulario(){

    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }  
    console.log(this.miFormulario.value);

  }

}

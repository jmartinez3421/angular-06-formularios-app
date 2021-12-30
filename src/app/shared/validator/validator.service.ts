import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors, AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {
  public nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = '^[A-Za-z0-9.!#$%+/=?^_{|}-~]+@[a-zA-Z0-9]+\\.[a-zA-Z0-9]{2,4}$';
  public passwordPattern: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  constructor() { }

  noPuedeSerStrider(argumento: FormControl): ValidationErrors | null {
    const valor = argumento.value?.trim();

    if (valor === 'strider') {
      return {
        noStrider: true
      }
    }
    return null;
  }

  camposIguales( campo1:string, campo2:string ){
    return ( formGroup: AbstractControl ): ValidationErrors | null => {
      const c1 = formGroup.get(campo1)?.value;
      const c2 = formGroup.get(campo2)?.value;

      if(c1 !== c2){
        formGroup.get(campo2)?.setErrors({noIguales:true});
        return {noIguales: true};
      }else{
        formGroup.get(campo2)?.setErrors(null);
      }
      return null;
    }
  }

}

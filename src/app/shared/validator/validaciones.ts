import { FormControl } from "@angular/forms";

export const nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
export const emailPattern: string = '^[A-Za-z0-9.!#$%+/=?^_{|}-~]+@[a-zA-Z0-9]+\\.[a-zA-Z0-9]{2,4}$';

export const noPuedeSerStrider = (argumento: FormControl) =>{
    const valor = argumento.value?.trim();

    if (valor === 'strider') {
        return {
            noStrider: true
        }
    }
    return null;
}
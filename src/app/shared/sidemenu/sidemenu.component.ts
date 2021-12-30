import { Component } from '@angular/core';

interface MenuItem{
  texto: string;
  ruta: string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [`
    .list-group-item:hover{
      cursor:pointer;
      background-color: lightblue;
    }

    .active:hover{
      background-color: blue !important;
    }
  `]
})
export class SidemenuComponent{

  templateMenu: MenuItem[] = [
    {
      texto: 'Básicos',
      ruta: './template/basicos'
    },
    {
      texto: 'Dinámicos',
      ruta: './template/dinamicos'
    },
    {
      texto: 'Switches',
      ruta: './template/switches'
    },
  ];

  reactiveMenu: MenuItem[] = [
    {
      texto: 'Básicos',
      ruta: './reactive/basicos'
    },
    {
      texto: 'Dinámicos',
      ruta: './reactive/dinamicos'
    },
    {
      texto: 'Switches',
      ruta: './reactive/switches'
    },
  ];

  authMenu: MenuItem[] = [
    {
      texto: 'Registro',
      ruta: './auth/register'
    },
    {
      texto: 'Login',
      ruta: './auth/login'
    }
  ]

}

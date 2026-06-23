import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [RouterLink, RouterLinkActive, IonicModule, CommonModule],
})
export class AppComponent {
  // CAMBIADO: Cambiamos '/folder/' por '/seccion/' para personalizar el enrutamiento
  public appPages = [
    { title: 'Inicio', url: '/seccion/inicio', icon: 'home' },
    { title: 'Información Personal', url: '/seccion/info-personal', icon: 'person' },
    { title: 'Contacto', url: '/seccion/contacto', icon: 'mail' },
  ];
  constructor() {}
}

//En esta area es donde se programa el menu lateral de la aplicacion
// Para eso cree una lista de objetos  llamada appPages en donde defini 
// los 3 menus que me solicito, los cuales son el de inicio el principal, el de informacion personal
// y el de Contacto, con su Url personalizada dinamica para que funcione con el app routes

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'seccion/inicio',
    pathMatch: 'full',
  },
  {
    path: 'seccion/:id',
    loadComponent: () => import('./folder/folder.page').then((m) => m.FolderPage),
  },
];


// En esta area es donde se configura el sistema de las rutas principales
// Programe una redireccion con la finalidad que al abrir la app cargue automaticamente la pantalla de inicio
// esto lo hice definiendo una ruta dinamica la cual es la de seccion/:id.
// haciendo la app mas eficiente que al tener esta ruta
// esta permite que una sola pagina reciba un parametro en la URL
// por lo cual  esta solo cambia el contenido segun la opcion seleccionada.
 
  
  
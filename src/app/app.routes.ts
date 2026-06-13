import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/components/home/home';

export const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent 
  },
  // Si añades más páginas, se verían así:
  // { path: 'planes', loadComponent: () => import('./modules/planes/planes.component').then(m => m.PlanesComponent) }
];
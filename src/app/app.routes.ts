import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/components/home/home';
import { Report } from './modules/support/components/report/report';

export const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent 
  },
  { path: 'report', component: Report }, // <--- Esta es la clave
  // Si añades más páginas, se verían así:
  // { path: 'planes', loadComponent: () => import('./modules/planes/planes.component').then(m => m.PlanesComponent) }
];
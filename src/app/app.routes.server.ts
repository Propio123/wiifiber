import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '', // La ruta raíz
    renderMode: RenderMode.Prerender
  },
  {
    path: '**', // Cualquier otra ruta
    renderMode: RenderMode.Prerender
  }
];
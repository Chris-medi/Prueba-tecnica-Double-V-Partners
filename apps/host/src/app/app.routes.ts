import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => import('remote/Routes').then((m) => m!.remoteRoutes),
  },
  // cargar modulo en lazy load
  {
    path: 'details/:name',
    loadComponent: () => import('./details/details.component').then(m => m.DetailsComponent),
  },
];

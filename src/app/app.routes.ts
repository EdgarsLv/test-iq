import { Routes } from '@angular/router';
import { Profile } from './pages/profile/profile';
import { Test } from './pages/test/test';
import { Results } from './pages/results/results';
import { AuthLayout } from './layout/auth-layout/auth-layout';
import { Home } from './pages/home/home';
import { authGuard } from './guards/auth.guard';
import { PublicLayout } from './layout/public-layout/public-layout';

export const routes: Routes = [
  {
    path: '',
    component: AuthLayout,
    children: [
      { path: '', component: Home },
      {
        path: 'profile',
        loadComponent: () =>
          import('./pages/profile/profile').then((c) => c.Profile),
        canActivate: [authGuard],
      },
      {
        path: 'test',
        loadComponent: () => import('./pages/test/test').then((c) => c.Test),
        canActivate: [authGuard],
      },
      {
        path: 'results',
        loadComponent: () =>
          import('./pages/results/results').then((c) => c.Results),
        canActivate: [authGuard],
      },
      {
        path: '**',
        component: Home,
      },
    ],
  },

  // {
  //   path: '',
  //   component: PublicLayout,
  //   children: [
  //     {
  //       path: 'login',
  //       component: Home,
  //     },
  //     {
  //       path: '**',
  //       component: Home,
  //     },
  //   ],
  // },
];

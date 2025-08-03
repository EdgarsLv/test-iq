import { Routes } from '@angular/router';
import { Profile } from './pages/profile/profile';
import { Test } from './pages/test/test';
import { Results } from './pages/results/results';
import { AuthLayout } from './layout/auth-layout/auth-layout';
import { Home } from './pages/home/home';
import { authGuard } from './guards/auth.guard';
import { PublicLayout } from './layout/public-layout/public-layout';
import { guestGuard } from './guards/guest.guard';

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
        path: 'statistics',
        loadComponent: () =>
          import('./pages/statistics/statistics').then((c) => c.Statistics),
        canActivate: [authGuard],
      },
      {
        path: 'login',
        loadComponent: () => import('./pages/login/login').then((c) => c.Login),
        canActivate: [guestGuard],
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

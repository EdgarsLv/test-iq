import { Routes } from '@angular/router';
import { AuthLayout } from './layout/auth-layout/auth-layout';
import { Home } from './pages/home/home';
import { authGuard } from './guards/auth.guard';
import { guestGuard } from './guards/guest.guard';
import { statisticsResolver } from './pages/statistics/statistics.resolver';
import { resultResolver } from './pages/result/result.resolver';
import { imageResolver } from './pages/result/image.resolver';
import { resultsResolver } from './pages/results/results.resolver';

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
        path: 'iq-test',
        loadComponent: () =>
          import('./pages/iq-test/iq-test').then((c) => c.IqTest),
        canActivate: [authGuard],
      },
      {
        path: 'result/:id',
        loadComponent: () =>
          import('./pages/result/result').then((c) => c.Result),
        resolve: { result: resultResolver, image: imageResolver },
      },
      {
        path: 'results',
        loadComponent: () =>
          import('./pages/results/results').then((c) => c.Results),
        resolve: { data: resultsResolver },
        canActivate: [authGuard],
      },
      {
        path: 'statistics',
        loadComponent: () =>
          import('./pages/statistics/statistics').then((c) => c.Statistics),
        resolve: { data: statisticsResolver },
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
];

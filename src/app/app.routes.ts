import { Routes } from '@angular/router';
import { Profile } from './pages/profile/profile';
import { Test } from './pages/test/test';
import { Results } from './pages/results/results';
import { AuthLayout } from './layout/auth-layout/auth-layout';
import { Home } from './pages/home/home';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: AuthLayout,
    children: [
      { path: '', component: Home },
      { path: 'profile', component: Profile },
      { path: 'test', component: Test },
      {
        path: 'results',
        loadComponent: () =>
          import('./pages/results/results').then((c) => c.Results),
        canActivate: [authGuard],
      },
    ],
  },
];

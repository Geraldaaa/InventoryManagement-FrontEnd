import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'login',
    loadComponent: () => import('./auth/login/login').then(c => c.Login)
  }
,

  {
    path: 'register',
    loadComponent: () => import('./auth/register/register').then(c => c.Register)
  },



  {
    path: '',
    loadComponent: () => import('./home/home').then(c => c.Home)
  }
,
  // Dashboard pages
  {
    path: 'dashboard/client',
    loadComponent: () => import('./dashboard/client/client').then(c => c.Client)
  },
  {
    path: 'dashboard/manager',
    loadComponent: () => import('./dashboard/manager/manager').then(c => c.Manager)
  },
  {
    path: 'dashboard/admin',
    loadComponent: () => import('./dashboard/admin/admin').then(c => c.Admin)
  },

  // Fallback route
  {
    path: '**',
    redirectTo: ''
  }



];

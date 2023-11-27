import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    canActivate: [AuthGuard],
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  
  },
  {
    path: 'datos',
    loadChildren: () => import('./datos/datos.module').then( m => m.DatosPageModule)
  },
  {
    path: 'movilizacion',
    loadChildren: () => import('./Auto/movilizacion/movilizacion.module').then( m => m.MovilizacionPageModule)
  },
  {
    path: 'add-autos',
    loadChildren: () => import('./Auto/add-autos/add-autos.module').then( m => m.AddAutosPageModule)
  },
  {
    path: 'delete-autos/:id',
    loadChildren: () => import('./Auto/delete-autos/delete-autos.module').then( m => m.DeleteAutosPageModule)
  },
  {
    path: 'detail-autos/:id',
    loadChildren: () => import('./Auto/detail-autos/detail-autos.module').then( m => m.DetailAutosPageModule)
  },
  {
    path: 'update-autos/:id',
    loadChildren: () => import('./Auto/update-autos/update-autos.module').then( m => m.UpdateAutosPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./error-page/error-page.module').then(m => m.ErrorPagePageModule)
  },
 


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

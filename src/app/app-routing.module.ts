import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./public/pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'rutina',
    loadChildren: () => import('./public/pages/rutina/rutina.module').then( m => m.RutinaPageModule)
  },  {
    path: 'progreso',
    loadChildren: () => import('./public/pages/progreso/progreso.module').then( m => m.ProgresoPageModule)
  },
  {
    path: 'avisos',
    loadChildren: () => import('./public/pages/avisos/avisos.module').then( m => m.AvisosPageModule)
  },
  {
    path: 'ajustes',
    loadChildren: () => import('./public/pages/ajustes/ajustes.module').then( m => m.AjustesPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./public/pages/login/login.module').then( m => m.LoginPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

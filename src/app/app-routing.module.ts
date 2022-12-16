import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./public/pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'rutinas',
    loadChildren: () => import('./public/pages/rutinas/rutinas.module').then( m => m.RutinasPageModule)
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
  {
    path: 'signin',
    loadChildren: () => import('./public/pages/signin/signin.module').then( m => m.SigninPageModule)
  },  {
    path: 'usuarios-creados',
    loadChildren: () => import('./public/pages/usuarios-creados/usuarios-creados.module').then( m => m.UsuariosCreadosPageModule)
  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

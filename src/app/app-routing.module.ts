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
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

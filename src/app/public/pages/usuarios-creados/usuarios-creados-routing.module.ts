import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuariosCreadosPage } from './usuarios-creados.page';

const routes: Routes = [
  {
    path: '',
    component: UsuariosCreadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuariosCreadosPageRoutingModule {}

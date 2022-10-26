import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiasPage } from './dias.page';



const routes: Routes = [
  {
  path: '',
  component: DiasPage
  },




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiasPageRoutingModule {}

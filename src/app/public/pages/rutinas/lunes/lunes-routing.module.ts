import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LunesPage } from './lunes.page';
import { MartesPage } from './lunes.page';




const routes: Routes = [
  {
  path: '',
  component: LunesPage
  },

  {
    path: '',
    component: MartesPage
    }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LunesPageRoutingModule {}
export class MartesPageRoutingModule {}

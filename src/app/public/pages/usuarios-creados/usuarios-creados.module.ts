import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuariosCreadosPageRoutingModule } from './usuarios-creados-routing.module';

import { UsuariosCreadosPage } from './usuarios-creados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuariosCreadosPageRoutingModule
  ],
  declarations: [UsuariosCreadosPage]
})
export class UsuariosCreadosPageModule {}

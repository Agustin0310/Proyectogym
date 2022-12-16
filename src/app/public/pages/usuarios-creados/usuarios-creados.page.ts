import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { UsuariosCreadosService } from 'src/app/core/services/usuarios-creados.service';

@Component({
  selector: 'app-usuarios-creados',
  templateUrl: './usuarios-creados.page.html',
  styleUrls: ['./usuarios-creados.page.scss'],
})
export class UsuariosCreadosPage implements OnInit {

  constructor(private menuCtrl: MenuController, private usuarioscreadosService: UsuariosCreadosService,
    public alertController: AlertController ) {


     }

     onClick() {
      this.menuCtrl.toggle();
     }

     usuarios = []
     todosLosUsuarios = []


  ngOnInit() {
    this.getUsuariosCreados()
  }

  async getUsuariosCreados() {
    this.usuarios = await this.usuarioscreadosService.getUsuariosCreados()
    console.table(this.usuarios);
    this.todosLosUsuarios = Array.from(this.usuarios)
  }


}

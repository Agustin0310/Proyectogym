import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/core/usuarios.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  constructor(private usuarioservice:UsuariosService) { }

  ngOnInit() {
  }

usuario = {
  
  nombre:"",
  apellido:"",
  edad:0,
  telefono:"",
  email:"",
  password:""

 } 

guardar(){
  console.log(this.usuario)
  this.usuarioservice.Register(this.usuario)
}



}

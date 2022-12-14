import { Injectable } from '@angular/core';
import { UsuarioJsonPlaceholder } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor() {}

  async getUsuarios(): Promise<UsuarioJsonPlaceholder[]> {
    const data = await fetch('http://localhost:8080/usuario');
    return await data.json();
  }

  async Register(usuario){
    const res = await fetch("http://localhost:8080/usuario", {method:"post", body: JSON.stringify(usuario), 
    headers: {
      'Content-type': 'application/json',
    }})
    console.log(res)
  }

}


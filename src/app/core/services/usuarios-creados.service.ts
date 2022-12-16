import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosCreadosService {

  constructor() { }

  async getUsuariosCreados(){
    const res = await fetch('http://localhost:8080/usuario');
    const resjson = (await res).json()
    return resjson
  }


}

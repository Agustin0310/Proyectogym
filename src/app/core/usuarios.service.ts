import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor() {}
 
  async getAll(){
    const res = await fetch("http://localhost:8080/usuario")
    console.log(res)
  }

  async Register(usuario){
    const res = await fetch("http://localhost:8080/usuario", {method:"post", body: JSON.stringify(usuario), 
    headers: {
      'Content-type': 'application/json',
    }})
    console.log(res)
  }

}


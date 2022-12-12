import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EjerciciosService {
  async getAll(){
    const res = await fetch("http://localhost:8080/ejercicios")
    console.log(res)
  }
  
  getById(id:number){}
  constructor() { }
}


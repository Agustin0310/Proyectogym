import { Injectable } from '@angular/core';
import { Rutina } from '../interfaces/rutinas';

@Injectable({
  providedIn: 'root'
})
export class EjerciciosService {
  async getAll():Promise<Rutina[]>{
    const res = await fetch("http://localhost:8080/ejercicios")
    return await res.json();
  }
  async getByNombre(dia:string):Promise<Rutina[]>{
    const res = await fetch("http://localhost:8080/ejercicios")
    const resjson = await res.json();
    return resjson.filter(Rutina => Rutina.dia === dia)
  }

  getById(id:number){}
  constructor() { }
}


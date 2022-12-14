import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouteConfigLoadEnd, RouterLink } from '@angular/router';
import { Rutina } from 'src/app/core/interfaces/rutinas';
import { EjerciciosService } from 'src/app/core/services/ejercicios.service';

@Component({
  selector: 'app-dias',
  templateUrl: './dias.page.html',
  styleUrls: ['./dias.page.scss'],
})
export class DiasPage implements OnInit {

  constructor(private ar:ActivatedRoute, private ejerciciosS:EjerciciosService ) { }

  tarjetas:Rutina[]= [
    {
      id:0,
      dia:"",
 
      series:0,
      ejercicios: [
        {
          id:0,
          nombre: "",
          musculo: "",
          peso:0,
          explicacion: "" , 
          repeticiones:0,
         
        },
        {
          id:0,
          nombre: "",
          musculo: "",
          peso:0,
          explicacion: "" , 
          repeticiones:0,
         
        }
      ]
    },
  ]

  ngOnInit() {

    this.getTarjetas();
    this.ar.params.subscribe (
      (route) => {
        if(route.dia === 'lunes')
        {
          console.log('jaja')
        }
        if(route.dia === 'martes')
        {
          console.log('jaja')
        }

        console.log(route)

      }
  
      
      )
    this.tarjetas

    }

    async getTarjetas(){
      this.tarjetas = await this.ejerciciosS.getByNombre("lunes")
  }

  

}
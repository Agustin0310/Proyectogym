import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouteConfigLoadEnd, RouterLink } from '@angular/router';
import { EjerciciosService } from 'src/app/core/ejercicios.service';

@Component({
  selector: 'app-dias',
  templateUrl: './dias.page.html',
  styleUrls: ['./dias.page.scss'],
})
export class DiasPage implements OnInit {

  constructor(private ar:ActivatedRoute, private ejerciciosS:EjerciciosService ) { }

  tarjetas = [
    {
      musculos: ["piernas","biceps"],
      ejercicios: [
        {
          nombre: "Sentadilla",
          repeticiones: 20,
          hecho: false,
        },
        {
          nombre: "Curl de biceps",
          repeticiones: 10,
          hecho: true,
        }
      ]
    },
    {
      musculos: ["piernas","biceps"],
      ejercicios: [
        {
          nombre: "B",
          repeticiones: 5555,
          hecho: false,
        },
        {
          nombre: "A",
          repeticiones: 10,
          hecho: true,
        }
      ]
    },
  ]

  ngOnInit() {

    this.getRutinas()

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
    
  }

  async getRutinas(){
    await this.ejerciciosS.getAll()
  }

}
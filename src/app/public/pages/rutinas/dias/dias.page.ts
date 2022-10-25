import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouteConfigLoadEnd } from '@angular/router';

@Component({
  selector: 'app-dias',
  templateUrl: './dias.page.html',
  styleUrls: ['./dias.page.scss'],
})
export class DiasPage implements OnInit {

  constructor(private ar:ActivatedRoute) { }

  ngOnInit() {
    this.ar.params.subscribe (
      (route) => console.log(route)
    )
    
  }
}



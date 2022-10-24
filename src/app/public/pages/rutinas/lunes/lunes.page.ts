import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lunes',
  templateUrl: './lunes.page.html',
  styleUrls: ['./lunes.page.scss'],
})
export class LunesPage implements OnInit {

  constructor(private ar:ActivatedRoute) { }

  ngOnInit() {
    this.ar.params.subscribe (
      (route) => console.log(route)
    )
  }

}

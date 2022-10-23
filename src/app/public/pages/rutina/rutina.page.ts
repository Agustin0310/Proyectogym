import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-rutina',
  templateUrl: './rutina.page.html',
  styleUrls: ['./rutina.page.scss'],
})
export class RutinaPage implements OnInit {

  constructor(private router:Router) { }

  goToPage(pageName:string):void{
    this.router.navigate(['${pageName}']);
  }
  ngOnInit() {
  }
}

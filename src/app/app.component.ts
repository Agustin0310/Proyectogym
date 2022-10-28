import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '', icon: 'home' },
    { title: 'Rutinas', url: '/rutinas', icon: 'barbell'},
    { title: 'Ajustes', url: '/ajustes', icon: 'settings' },
    { title: 'Login', url: '/login', icon: 'finger-print' },
    { title: 'Signin', url: '/signin', icon: 'log-in' },
  ];


}
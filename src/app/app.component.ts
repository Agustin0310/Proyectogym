import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '', icon: 'home' },
    { title: 'Rutina', url: '/rutina', icon: 'barbell'},
    { title: 'Progreso', url: '/progreso', icon: 'checkmark-done' },
    { title: 'Avisos', url: '/avisos', icon: 'information' },
    { title: 'Ajustes', url: '/ajustes', icon: 'settings' },
    { title: 'Login', url: '/login', icon: 'finger-print' },
  ];


}
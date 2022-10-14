import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/Inbox', icon: 'home' },
    { title: 'Rutina', url: '/folder/Outbox', icon: 'barbell' },
    { title: 'Progreso', url: '/folder/Favorites', icon: 'checkmark-done' },
    { title: 'Avisos', url: '/folder/Archived', icon: 'information' },
    { title: 'Ajustes', url: '/folder/Trash', icon: 'settings' },
    { title: 'Login', url: '/folder/Spam', icon: 'finger-print' },
  ];


}
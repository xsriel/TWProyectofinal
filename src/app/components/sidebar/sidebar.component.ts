import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Home',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'Contacto',  icon:'person', class: '' },
    { path: '/table-list', title: 'Acerca de',  icon:'content_paste', class: '' },
    { path: '/typography', title: 'Preguntas Frecuentes',  icon:'library_books', class: '' },
    { path: '/icons', title: 'Admin Grafica',  icon:'bubble_chart', class: '' },
    { path: '/notifications', title: 'Admin Datos',  icon:'bubble_chart', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}

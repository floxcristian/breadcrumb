import { Component, OnInit } from '@angular/core';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  imports: [BreadcrumbModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  items: MenuItem[] | undefined;

  home: MenuItem | undefined;

  ngOnInit() {
    this.items = [
      { label: 'Inicio' },
      { label: 'Repuestos Para Equipos De Carga' },
      { label: 'Componentes De Remolque Y Semiremolque' },
      { label: 'Estanques Y Dispensadores Para Equipos De Carga' },
    ];
  }
}

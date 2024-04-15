import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import * as L from 'leaflet'; // Importa Leaflet


@Component({
  selector: 'app-map-component',
  standalone: true,
  imports: [],
  templateUrl: './map-component.component.html',
  styleUrl: './map-component.component.css'
})


export class MapComponentComponent implements AfterViewInit {
  // Propiedad para almacenar la instancia del mapa de Leaflet
  map: any;  // Cambiar temporalmente a any para comprobar si se resuelve el problema

  ngAfterViewInit() {
      // Inicializa el mapa después de que la vista haya sido cargada
      this.initMap();
  }

  private initMap(): void {
      // Inicializa el mapa
      const mapElement = document.getElementById('map');
      if (mapElement) {
          this.map = L.map(mapElement).setView([4.639386, -74.082412], 6);
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
              attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          }).addTo(this.map);
      }
  }
}


import { Component, OnInit } from '@angular/core';

import * as L from 'leaflet';

import { environment } from '@env';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  readonly config = {
    ...environment.map,
    osm: environment.services.osm
  };
  private map: L.Map;

  constructor() { }

  ngOnInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map', {
      attributionControl: false,
      center: this.config.center as L.LatLngExpression,
      zoom: this.config.zoom.default
    });

    const tiles = L.tileLayer(this.config.osm.url, {
      maxZoom: this.config.zoom.max,
      minZoom: this.config.zoom.min
    });

    tiles.addTo(this.map);
  }

}

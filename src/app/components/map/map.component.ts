import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import * as L from 'leaflet';
import '@geoman-io/leaflet-geoman-free';

import { environment } from '@env';
import { MapState } from '@interfaces';

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

  constructor(private location: Location, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const initialState: MapState = {
        center: new L.LatLng(
          params['lat'] || this.config.center.lat,
          params['lng'] || this.config.center.lng
        ),
        zoom: params['zoom'] || this.config.zoom.default
      };

      this.initMap(initialState);
    });
  }

  private initMap(state: MapState): void {
    this.map = L.map('map', {
      attributionControl: true,
      center: state.center,
      zoom: state.zoom
    });

    this.map.attributionControl.setPrefix("Leaflet");
    this.map.attributionControl.addAttribution("Map data from © OpenStreetMap");

    // TODO: Decide what functionality to expose to users.
    this.map.pm.addControls({
      position: 'topleft',
      // drawCircle: false,
      drawCircleMarker: false,
      drawPolyline: false,
      drawMarker: false,
      cutPolygon: false,
      rotateMode: false
    });

    // TODO: Consider moving this to a service class.
    this.map.on('moveend', () => {
      this.location.replaceState(`/explore/${this.map.getZoom()}/${this.map.getCenter().lat}/${this.map.getCenter().lng}`)
    });

    const tiles = L.tileLayer(this.config.osm.url, {
      maxZoom: this.config.zoom.max,
      minZoom: this.config.zoom.min
    });

    tiles.addTo(this.map);
  }

}

import { Component, OnInit } from '@angular/core';
import { Marker } from '../../classes/marker.class';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  markers: Marker[] = [];

  lat = 51.678418;
  lng = 7.809007;

  constructor() {
    const newMarker = new Marker(51.678418, 7.809007);
    this.markers.push(newMarker);
  }

  ngOnInit() {
  }

  addMarker(event) {
    const lat = event.coords.lat;
    const lng = event.coords.lng;

    const marker = new Marker(lat, lng);
    this.markers.push(marker);
  }

}

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
    if (localStorage.getItem('markers')) {
      this.markers = JSON.parse(localStorage.getItem('markers'));
    }
  }

  ngOnInit() {
  }

  addMarker(event) {
    const lat = event.coords.lat;
    const lng = event.coords.lng;

    const marker = new Marker(lat, lng);
    this.markers.push(marker);
    this.saveInLocalStorage();
  }

  saveInLocalStorage() {
    localStorage.setItem('markers', JSON.stringify(this.markers));
  }

}

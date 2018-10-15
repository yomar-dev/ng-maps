import { Component, OnInit } from '@angular/core';
import { Marker } from '../../classes/marker.class';
import { MatSnackBar } from '@angular/material';
import { MatDialog, MatDialogRef } from '@angular/material';
import { EditMapComponent } from './edit-map.component';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  markers: Marker[] = [];

  lat = 4.6638492;
  lng = -74.1329011;

  constructor(public snackBar: MatSnackBar, public dialog: MatDialog) {
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
    this.snackBar.open('Marker added', 'Close', { duration: 2000 });
  }

  deleteMarker(index: number) {
    this.markers.splice(index, 1);
    this.saveInLocalStorage();
    this.snackBar.open('Marker deleted', 'Close', { duration: 2000 });
  }

  editMarker(marker: Marker) {
    const dialogRef = this.dialog.open(EditMapComponent, {
      width: '250px',
      data: { title: marker.title, desc: marker.desc }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) { return; }

      marker.title = result.title;
      marker.desc = result.desc;
      this.saveInLocalStorage();
      this.snackBar.open('Marker updated', 'Close', { duration: 2000 });
    });
  }

  saveInLocalStorage() {
    localStorage.setItem('markers', JSON.stringify(this.markers));
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//zoom level
zoom: number = 10;
//start position
  lat: number = 39.75167;
  lng: number = -105.01417;
  //markers
  markers: marker[] = [
    {
      name: 'Museum of Nature and Science',
      lat: 39.7475,
      lng: -104.9428,
      draggable: true,
      openInfoWindow: true
    },
    {
      name: 'Corrs Field',
      lat: 39.7559,
      lng: -104.9942,
      draggable: true,
      openInfoWindow: true
    },
    {
      name: 'Union Station',
      lat: 39.7537,
      lng: -105.0007,
      draggable: true,
      openInfoWindow: true
    }
  ];

  constructor(){

  }

  clickedMarker(marker:marker, index:number){
    console.log('clicked')
  }

  mapClicked($event: any){
    var newMarker = {
      name: 'Untitled',
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true,
      openInfoWindow: true
    }
    this.markers.push(newMarker);
  }

  markerDragEnd(marker:any, $event: any){
    var updMarker = {
      name: marker.name,
      lat: parseFloat(marker.lat),
      lng: parseFloat(marker.lng),
      draggable: false
    }

    var newLat = $event.coords.lat;
    var newLng = $event.coords.lng;
  }
}

//Marker type
interface marker {
  name: string;
  lat: number;
  lng: number;
  draggable: boolean;
  openInfoWindow: boolean;
}

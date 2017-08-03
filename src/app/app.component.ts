import { Component } from '@angular/core';
import { MarkerService } from './services/marker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MarkerService]
})
export class AppComponent {
//zoom level
zoom: number = 10;
//start position
  lat: number = 39.75167;
  lng: number = -105.01417;
  //Values
  markerName: string;
  markerLat: string;
  markerLng: string;
  markerDraggable: string;
  //markers
  markers: marker[] = [

  ];

  constructor(private _markerService:MarkerService){
    this.markers = this._markerService.getMarkers();

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

    this._markerService.updateMarker(updMarker, newLat, newLng)
  }

  // addMarker(){
  //   if(this.markerDraggable == 'Yes'){
  //     var isDraggable = true;
  //   }else{
  //     var isDraggable = false;
  //   }
  //   var newMarker = {
  //     name:this.markerName,
  //     lat: parseFloat(this.markerLat),
  //     lng: parseFloat(this.markerLng),
  //     draggable: isDraggable,
  //     openInfoWindow: true
  //   }
  //   this.markers.push(newMarker);
  //   this._markerService.addMarker(newMarker)
  //  }
  //
   removeMarker(marker){
     for(var i = 0; i < this.markers.length; i++){
       if(marker.name == this.markers[i].name){

            this.markers.splice(i, 1)
       }
     }
   }

  scrollToBottom(){
   document.body.scrollTop = document.body.scrollHeight;
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

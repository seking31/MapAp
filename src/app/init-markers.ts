export class Init {
  load(){
    if(localStorage.getItem('markers') === null || localStorage.getItem('markers') === undefined){
      console.log('no markers found...creating')

      var markers = [
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

      localStorage.setItem('markers', JSON.stringify(markers) )
    } else {
      console.log('Loading markers....')
    }
  }
}

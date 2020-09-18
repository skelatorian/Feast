// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

mapboxgl.accessToken ="pk.eyJ1IjoiamVzcGkxMTYiLCJhIjoiY2tmN2hraTBsMDJoMDJycGMyZnMwZmFnbiJ9.p1H_JtUf2Bl_KtGuPNEcow";

    var map = new mapboxgl.Map({
          container: 'map', // HTML container id
          style: 'mapbox://styles/mapbox/streets-v9', // style URL
          center: [-96, 37.8],
          zoom: 3
        })

        map.addControl(
            new mapboxgl.GeolocateControl({
                positionOptions: {
                    enableHighAccuracy: true
                },
                trackUserLocation: true
                })
            );
    
    map.addControl(
        new MapboxDirections({
            accessToken: mapboxgl.accessToken,
            unit: 'imperial',
            profile: 'mapbox/driving'
        }),
        'top-left'
        );
var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 47.6567,
            lng: -122.3152
        },
        zoom: 18,
        draggable: true,
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    marker = new google.maps.Marker({
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: {
            lat: 47.6566891600,
            lng: -122.3152107288
        }
    });
    marker.addListener('click', toggleBounce);

    // Manually adjusted the marker and found the center
    // Should be a cleaner way to do this
    google.maps.event.addListener(marker, 'dragend', function(evt){
        console.log('Marker dropped: Current Lat: ' + evt.latLng.lat().toFixed(10) + ' Current Lng: ' + evt.latLng.lng().toFixed(10));
    });

    google.maps.event.addListener(marker, 'dragstart', function(evt){
        console.log("Currently dragging marker...");
    });
}

function toggleBounce() {
    if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}

// var myCenter = new google.maps.LatLng(47.6567, -122.3152);
//
// function initialize() {
//     var mapProp = {
//         center: myCenter,
//         zoom: 18,
//         scrollwheel: false,
//         draggable: true,
//         mapTypeId: google.maps.MapTypeId.ROADMAP
//     };
//
//     var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
//
//     var marker = new google.maps.Marker({
//         position: myCenter,
//     });
//
//     marker.setMap(map);
// }
// google.maps.event.addDomListener(window, 'load', initialize);
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
            lat: 47.6567,
            lng: -122.3152
        }
    });
    marker.addListener('click', toggleBounce);
}

function toggleBounce() {
    if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}

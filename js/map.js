var directionDisplay;
            var directionsService = new google.maps.DirectionsService();
            var map;

            function initMap() {
                directionsDisplay = new google.maps.DirectionsRenderer();
                var myOptions = {
                    zoom: 15,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    center: {lat: -41.298453, lng: 174.756764}
                };
                map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
                directionsDisplay.setMap(map);
                calcRoute();
            }

            function calcRoute() {
                var first = new google.maps.LatLng(-41.297103, 174.761544);
                var second = new google.maps.LatLng(-41.303875, 174.753651);
                var third = new google.maps.LatLng(-41.301176, 174.757032);
                var fourth = new google.maps.LatLng(-41.297042, 174.751560);

                var request = {
                    origin: "-41.293893, 174.761256",
                    destination: "-41.293756, 174.761237",
                    waypoints: [{location: first, stopover: true},
                                {location: second, stopover: true},
                               {location: third, stopover: true},
                               {location: fourth, stopover: true}],
                    optimizeWaypoints: true,
                    travelMode: google.maps.DirectionsTravelMode.WALKING
                };
                directionsService.route(request, function (response, status) {
                    if (status == google.maps.DirectionsStatus.OK) {
                        directionsDisplay.setDirections(response);
                    } else {
                        alert("directions response " + status);
                    }
                });
            }
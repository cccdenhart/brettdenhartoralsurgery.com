const TOKEN = process.env.REACT_APP_MAPBOX;
const LAT = 42.17212;
const LONG = -72.58973;

mapboxgl.accessToken = TOKEN;
var map = new mapboxgl.Map({
    container: 'map',
    style: "mapbox://styles/mapbox/dark-v9",
    center: [LONG, LAT],
    zoom: 9
});

map.addControl(
    new MapboxDirections({
        accessToken: mapboxgl.accessToken
    }),
    'top-left'
);

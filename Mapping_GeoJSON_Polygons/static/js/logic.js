// Add console.log to check to see if our code is working.
//console.log("working");

// Create the map object with a center and zoom level.
//let map = L.map('mapid').setView([36.1733, -120.1794], 7);


// Create the map object with center at the San Francisco airport.
//let map = L.map('mapid').setView([37.6213, -122.3790], 5);

// Get data from cities.js
//let cityData = cities;

// Create the map object with a center and zoom level.
/*let map = L.map("mapid", {
    center: [
      40.7, -94.5
    ],
    zoom: 4
  });*/

//  Add a marker to the map for Los Angeles, California.
//let marker = L.marker([34.0522, -118.2437]).addTo(map);

// Loop through the cities array and create one marker for each city.
/*cityData.forEach(function(city) {
  console.log(city)
  L.circleMarker(city.location, {
    color: 'orange',
    fillColor: '#ffffa1',
    radius: city.population/100000
  })
  //L.marker(city.location).addTo(map)
  .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
  .addTo(map);
 });*/

 // Coordinates for each point to be used in the line.
 /* let line = [
  [33.9416, -118.4085],
  [37.6213, -122.3790],
  [40.7899, -111.9791],
  [47.4502, -122.3088]
]; */

/*let line = [
  [33.9416, -118.4085],
  [30.18999924,-97.668663992],
  [43.742663696, -79.456498174],
  //[37.6213, -122.3790],
  //[40.7899, -111.9791],
  //[47.4502, -122.3088],
  [40.6441666667, -73.7822222222]
];*/


// Create a polyline using the line coordinates and make the line red.
// Create a polyline using the line coordinates and make the line black.
/*L.polyline(line, {
  color: "blue",
  weight: 4,
  opacity:0.5,
  //stroke : true,
  dashArray: "10,10" 
}).addTo(map);*/

/*L.circle([34.0522, -118.2437], {
  color: 'black',
  fillColor: 'yellow',
  radius: 300
}).addTo(map);*/

/*L.circleMarker([34.0522, -118.2437],{
  or: 'black',
  fillColor: '#ffffa1',
  radius: 300
}).addTo(map);*/


//We create the tile layer that will be the background of our map.
/* let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        accessToken: API_KEY
}); */

/*let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);*/


// Create the map object with center at the San Francisco airport.
//let map = L.map('mapid').setView([37.6213, -122.3790], 7);

// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};

/*let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        accessToken: API_KEY
});*/

// Grabbing our GeoJSON data.
/* L.geoJSON(sanFranAirport, {
  // We turn each feature into a marker on the map.
  pointToLayer: function(feature, latlng) {
    console.log(feature);
    return L.marker(latlng)
    .bindPopup("<h2>" + feature.properties.name + "</h2> <hr> <h3>" + feature.properties.city + ", " + feature.properties.country + "</h3>");
  }
}).addTo(map); */

/*L.geoJSON(sanFranAirport, {
  // We turn each feature into a marker on the map.
  onEachFeature : function(feature, layer) {
    console.log(layer);
    //return L.marker(latlng)
    layer.bindPopup("<h2>" + "Airport code: " + feature.properties.faa + "</h2> <hr> <h3>" + "Airport name: " + feature.properties.name  + "</h3>");
  }
}).addTo(map);*/

// Then we add our 'graymap' tile layer to the map.
//streets.addTo(map);

// Create the map object with center and zoom level.
//let map = L.map('mapid').setView([30, 30], 2);

let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        accessToken: API_KEY
});

let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        accessToken: API_KEY
});

//streets.addTo(map);

// Create a base layer that holds both maps.
/*let baseMaps = {
  Light: light,
  Dark: dark
};*/

// Create the map object with center, zoom level and default layer.
/*let map = L.map('mapid', {
	center: [44.0, -80.0],
  zoom: 2,
	layers: [dark]
});*/

// Pass our map layers into our layers control and add the layers control to the map.
//L.control.layers(baseMaps).addTo(map);

// Accessing the airport GeoJSON URL
//let airportData = "https://raw.githubusercontent.com/ShruthiRamu/Mapping_Earthquakes/master/majorAirports.json";

// Accessing the Toronto airline routes GeoJSON URL.
let torontoData = "https://raw.githubusercontent.com/ShruthiRamu/Mapping_Earthquakes/master/torontoRoutes.json";

// Create a style for the lines.
let myStyle = {
	color: "blue",
  weight: 1,
  fillColor : "yellow"
}

// Grabbing our GeoJSON data.
/*d3.json(torontoData).then(function(data) {
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
L.geoJson(data, {
  style: myStyle,
  onEachFeature : function(feature, layer) {
    console.log(layer);
    layer.bindPopup("<h2>" + "Airline code: " + feature.properties.airline + "</h2> <hr> <h3>" + "Destination: " + feature.properties.dst  + "</h3>");
  }
}).addTo(map);
});*/


/*d3.json(airportData).then(function(data) {
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
L.geoJson(data, {
  // We turn each feature into a marker on the map.
  pointToLayer: function(feature, latlng) {
    console.log(feature);
    return L.marker(latlng)
    .bindPopup("<h2>" + "Airport code: " + feature.properties.faa + "</h2> <hr> <h3>" + "Airport name: " + feature.properties.name  + "</h3>");
  }
}).addTo(map);
});*/


let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        accessToken: API_KEY
});

let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  "Streets": streets,
  "Stellite Streets": satelliteStreets
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
	center: [43.7, -79.3],
  zoom: 11,
	layers: [streets]
});

L.control.layers(baseMaps).addTo(map);

// Accessing the Toronto neighborhoods GeoJSON URL.
let torontoHoods = "https://raw.githubusercontent.com/ShruthiRamu/Mapping_Earthquakes/master/torontoNeighborhoods.json";

d3.json(torontoHoods).then(function(data) {
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
L.geoJson(data, {
  style: myStyle,
  onEachFeature : function(feature, layer) {
    console.log(layer);
    layer.bindPopup("<h2>" + "Neighborhood: " + feature.properties.AREA_NAME + "</h2>");
  }
}).addTo(map);
});
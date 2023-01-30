var map = L.map('map').setView([43.467, -80.508], 13);
var Esri_WorldGrayCanvas = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
	maxZoom: 16
}).addTo(map);

function styleFunction(){
    return {color: "purple", fillOpacity: "0.5"};
};

function displayInfo(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.name) {
        layer.bindPopup(feature.properties.name);
    }
    layer.bindPopup(feature.properties.name);
}

L.geoJSON(data, {style: styleFunction, onEachFeature: displayInfo}).addTo(map);



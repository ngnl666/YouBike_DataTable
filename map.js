window.$ = window.jQuery = require("jquery");

let marker;
let youbikeData;
const markers = [];

(async function ($) {
  await $.get(
    "https://tcgbusfs.blob.core.windows.net/blobyoubike/YouBikeTP.json",
    (res, status) => {
      if (status === "success") {
        youbikeData = Object.values(res.retVal);
        youbikeData.forEach((item) => addMarker(item));
      } else {
        throw new Error(error);
      }
    }
  ).catch((err) => {
    console.error(err);
  });
})(jQuery);

function initMap() {
  window.map = new google.maps.Map(document.querySelector("#map"), {
    center: { lat: 25.0338041, lng: 121.5645561 },
    zoom: 16,
    streetViewControl: false,
  });
}

const addMarker = (item) => {
  marker = new google.maps.Marker({
    position: { lat: +item.lat, lng: +item.lng },
    map: window.map,
    title: `${item.sna}`,
  });

  let eMarker = marker;
  eMarker.addListener("click", function () {
    let stationMarker = youbikeData.find((item) => item.sna === eMarker.title);
    setStationPlace(stationMarker);
  });
  markers.push(marker);
};

// set center to station
const setStationPlace = (station) => {
  window.scrollTo(0, window.innerHeight);
  window.map.zoom = 20;
  window.map.setCenter({ lat: +station.lat, lng: +station.lng });
  popupWindow(station);
};
module.exports = setStationPlace;

const popupWindow = (station) => {
  const infowindow = new google.maps.InfoWindow({
    content: `<p class="fw-bolder">${station.sna}<p>可借車輛: ${station.sbi}<br/>可還車位: ${station.bemp}`,
  });
  infowindow.open({
    anchor: markers.find((item) => item.title === station.sna),
    map: window.map,
    shouldFocus: false,
  });
};

import React from 'react'
import { Loader } from "@googlemaps/js-api-loader"
import './App.css';

const App = () => {
  let map;
  const additionalOptions = {};  

  const loader = new Loader({
    apiKey: process.env.REACT_APP_API_KEY,
    version: "weekly",
    ...additionalOptions,
  });

  loader.load().then(() => {
    map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
  });

  return (
    <div id="map" style={{width:600, height:400}}>
    </div>
  );
}

export default App;

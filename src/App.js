// import { useState, useMemo } from 'react';
// import usePlacesAutocomplete, {
//   getGeocode,
//   getLatLng,
// } from 'use-places-autocomplete';

import React from 'react';
import './App.css';
import GoogleMaps from './GoogleMaps';


function App() {
  return (
    <div className='App'>
      <GoogleMaps />
    </div>
  );
}

export default App;

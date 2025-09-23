'use client';
import L from 'leaflet';
import { Map as M } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import iconUrl from 'leaflet/dist/images/marker-icon.png';

const Map = () => {
  const mapRef = useRef<null | M>(null);
  const lat = 26.6175558;
  const lng = -80.1097575;

  useEffect(() => {
    L.Marker.prototype.options.icon = L.icon({
      iconUrl: iconUrl.src,
    });


    // Check if the map has already been initialized
    if (mapRef.current) {
      return;
    }

    // Initialize the map with a specific view and zoom level
    mapRef.current = L.map('map').setView([lat, lng], 40);

    // Add a tile layer from OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(mapRef.current);

    const myPoint = L.latLng(lat, lng);

    // 4. Crea y agrega el marcador al mapa
    L.marker(myPoint)
      .addTo(mapRef.current)
      .bindPopup('¡Hola! Estamos aquí.')
      .openPopup();
  }, []);

  return (
    <div className="flex h-96 items-center justify-center rounded-2xl bg-gray-200 dark:bg-gray-700">
      <div id="map" style={{ height: '24rem', width: '100%' }}></div>
    </div>
  );
};

export default Map;

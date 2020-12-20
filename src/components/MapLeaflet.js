import React, { useEffect, useRef, useState } from 'react';
import L, { geoJson } from 'leaflet';

function MapLeaflet() {

  const [markerPosition, setMarkerPosition] =  useState({ lat:48.8526757, lng:2.2631792 })

  const mapRef = useRef(null)
      useEffect(() => {

        mapRef.current = L.map('map', {
            center: markerPosition,
            zoom: 12,
            layers: [
                L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
                    attribution:
                        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                })
            ]
        })
    }, [markerPosition])


    const markerRef = useRef(null)
    const customIcon = L.icon({
        iconUrl: 'https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png',
        iconSize: [35,46],
        iconAnchor: [17,46]
    });

    useEffect(() => {
        if(markerRef.current)
            markerRef.current.setLatLng(markerPosition)
        else
            markerRef.current = L.marker(markerPosition, {icon:customIcon }).addTo(mapRef.current).bindPopup('Home Sweet Home')
    }, [markerPosition, customIcon])

    return <div id='map' style={{ width: '80%' }}></div>
}

export default MapLeaflet

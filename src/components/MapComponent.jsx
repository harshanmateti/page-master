import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix marker icon issue with Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

// Helper component to update map view on position change
const ChangeView = ({ center, zoom }) => {
    const map = useMap();
    useEffect(() => {
        if (center && zoom) {
            map.setView(center, zoom);
        }
    }, [center, zoom, map]);

    return null;
};

const MapComponent = () => {
    const [position, setPosition] = useState([51.505, -0.09]); // Default position (London)
    const [hasLocation, setHasLocation] = useState(false); // Flag to check if location is available

    useEffect(() => {
        // Check if geolocation is supported
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    const { latitude, longitude } = pos.coords;
                    setPosition([latitude, longitude]); // Update position with user's location
                    setHasLocation(true); // Location available
                },
                () => {
                    alert('Unable to retrieve your location.');
                }
            );
        } else {
            alert('Geolocation is not supported by this browser.');
        }
    }, []);

    return (
        <MapContainer
            center={position} // Center the map on the position
            zoom={13} // Set the zoom level
            style={{
                width: '100%',
                height: '400px',
                borderRadius: '10px',
                marginTop: '10px',
                border: '1px solid #ccc',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            }}
        >
            <ChangeView center={position} zoom={15} />
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {hasLocation && (
                <Marker position={position}>
                    <Popup>
                        You are here! <br /> Latitude: {position[0]}, Longitude: {position[1]}
                    </Popup>
                </Marker>
            )}
        </MapContainer>
    );
};

export default MapComponent;


// import React, { useEffect, useState } from 'react';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// const MapComponent = () => {
//   const [position, setPosition] = useState({ lat: 51.505, lng: -0.09 }); // Default fallback position
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords;
//           setPosition({ lat: latitude, lng: longitude });
//           setLoading(false);
//         },
//         (error) => {
//           console.error("Error obtaining location:", error);
//           setLoading(false);
//         },
//         { enableHighAccuracy: true } // Enable high accuracy
//       );
//     } else {
//       console.log("Geolocation is not supported by this browser.");
//       setLoading(false);
//     }
//   }, []);

//   if (loading) return <div>Loading map...</div>;

//   return (
//     <LoadScript googleMapsApiKey="AIzaSyArS6KaM0ZCqwLPTzWmHZpMGMHfmTG6mHk">
//       <GoogleMap
//         mapContainerStyle={{ width: '100%', height: '400px' }}
//         center={position}
//         zoom={16} // Adjust zoom for better accuracy
//       >
//         <Marker position={position} />
//       </GoogleMap>
//     </LoadScript>
//   );
// };

// export default MapComponent;
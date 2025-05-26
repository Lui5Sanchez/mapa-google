import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 23.2494, // Coordenada de Mazatlán
  lng: -106.4111,
};

const Mapa = () => {
  const [selected, setSelected] = useState(null);

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
        
        {/* 🔹 Marcador */}
        <Marker 
          position={center} 
          onClick={() => setSelected(center)} 
        />

        {/* 🔹 InfoWindow cuando se hace clic en el marcador */}
        {selected && (
          <InfoWindow position={selected} onCloseClick={() => setSelected(null)}>
            <div className="p-2 text-black">
              <h2 className="font-bold">Mazatlán</h2>
              <p>Ubicación destacada en el mapa.</p>
            </div>
          </InfoWindow>
        )}

      </GoogleMap>
    </LoadScript>
  );
};

export default Mapa;

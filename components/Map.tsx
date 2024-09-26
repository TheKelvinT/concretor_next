import React, { useState } from "react"
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api"

const containerStyle = {
  width: "100%",
  height: "100%",
}

const center = {
  lat: 3.027722120902148,
  lng: 101.60909466393697,
}

const Map = () => {
  const [showInfo, setShowInfo] = useState(true)
  const [markerPosition, setMarkerPosition] = useState(center)

  return (
    <>
      {process.env.NEXT_PUBLIC_MAPS_API_KEY && (
        <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_MAPS_API_KEY}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={15}
          >
            {/* Place marker */}
            <Marker
              position={markerPosition}
              onClick={() => setShowInfo(true)}
            />

            {/* Conditionally show InfoWindow when marker is clicked */}
            {showInfo && (
              <InfoWindow
                position={markerPosition} // Anchor InfoWindow to marker position
                onCloseClick={() => setShowInfo(false)}
              >
                <div className="w-[240px]">
                  <p className="font-bold">
                    CONCRETOR Engineering Office - Structural Building Repair
                  </p>
                  <p>Building restoration service</p>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        </LoadScript>
      )}
    </>
  )
}

export default Map

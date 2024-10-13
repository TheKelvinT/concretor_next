import React, { useState } from "react"
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useJsApiLoader,
} from "@react-google-maps/api"
import { Spin } from "antd"

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

  // Use the useJsApiLoader hook to handle loading
  const apiKey = process.env.NEXT_PUBLIC_MAPS_API_KEY || ""

  // Use the useJsApiLoader hook to handle loading
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: apiKey,
  })

  // Custom loading message
  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spin />
      </div>
    )
  }

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
      {/* Place marker */}
      <Marker position={markerPosition} onClick={() => setShowInfo(true)} />

      {/* Conditionally show InfoWindow when marker is clicked */}
      {showInfo && (
        <InfoWindow
          position={markerPosition}
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
  )
}

export default Map

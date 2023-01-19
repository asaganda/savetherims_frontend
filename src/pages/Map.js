import { useState } from 'react'
import { Link } from 'react-router-dom'
import { GoogleMap, useLoadScript, MarkerF, InfoWindowF } from '@react-google-maps/api'

const divContainerMapSize = {
    width: "100vw"
}
const mapContainerStyle = {
    width: "100vw",
    height: "50vh",
}
const center = {
    lat: 41.0334663,
    lng: -74.0441364,
}
const options = {
    disableDefaultUI: true,
    zoomControl: true,
}
const Map = (props) => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    })
    const [selectedCoord, setSelectedCoord] = useState(null)
    
    if (loadError) return <div>Error loading maps</div>
    if (!isLoaded) return <div>Loading Maps...</div>

    return(
        <>
            <div style={divContainerMapSize}>
                <GoogleMap
                    mapContainerStyle={mapContainerStyle} 
                    zoom={9}
                    center={center}
                    options={options}>
                    {props.coords.map((coord) => (
                        <MarkerF 
                            key={coord._id} 
                            position={{ lat: coord.lat, lng: coord.lng}}
                            onClick={() => setSelectedCoord(coord)}
                        />
                    ))}
                    {selectedCoord? (
                    <InfoWindowF 
                        position={{lat: selectedCoord.lat, lng: selectedCoord.lng}}
                        onCloseClick={() => setSelectedCoord(null)}
                        options={{ pixelOffset: new window.google.maps.Size(0, -30) }}
                    >
                        <div>
                            <h2>Pothole!</h2>
                            <p>View below for details</p>
                        </div>
                    </InfoWindowF>
                    ) : null}
                </GoogleMap>
                <div>
                    {selectedCoord ? (
                        <div>
                            <h3>Pothole logged at</h3>
                            <p>Latitude: {selectedCoord.lat}</p>
                            <p>Longitude: {selectedCoord.lng}</p>
                            <p>Fixed: {selectedCoord.fixed ? "No" : "Yes"}</p>
                        </div>
                    ) : <p>Select marker on map to view more details</p>}
                    {/* italicize the p tag above */}
                </div>
            </div>
        </>
    )
}

export default Map
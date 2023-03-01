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

const options = {
    disableDefaultUI: true,
    zoomControl: true,
}
const Map = (props) => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    })
    const [selectedCoord, setSelectedCoord] = useState(null)

    const center = {
        lat: props.currentLocation.lat,
        lng: props.currentLocation.lng,
    }

    if (loadError) return <div>Error loading maps</div>
    if (!isLoaded || !center.lat) return <div>Loading Maps...</div>

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
                            icon={coord.fixed ? 
                                { url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png" } : null }
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
                <div className="p-4">
                    {selectedCoord ? (
                        <div className="bg-[#e0fbfc] px-5 py-4 rounded-lg font-sans">
                            <h3 className="font-bold border-b border-black w-10/12">Pothole logged at</h3>
                            <p className="border-b border-black w-10/12">Latitude: {selectedCoord.lat}</p>
                            <p className="border-b border-black w-10/12">Longitude: {selectedCoord.lng}</p>
                            <p>Fixed: {selectedCoord.fixed ? "Yes" : "No"}</p>
                        </div>
                    ) : <p className="italic text-center">Select marker on map to view more details</p>}
                </div>
            </div>
        </>
    )
}

export default Map
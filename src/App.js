import { useState, useEffect} from 'react'
import axios from 'axios'
import './App.css'

const App = () => {
  const [coords, setCoords] = useState([])

  // variables
  const baseURL = 'https://savetherims-backend.herokuapp.com/coord'

  // Functions
  const geolocate = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      console.log(pos.coords.latitude, pos.coords.longitude);
    });
  }
  const handleGeolocate = () => {
    geolocate()
  }

  // API requests
  // Getting all coords
  const getCoords = () => {
    axios.get(baseURL)
    .then((res) => {
      console.log(res.data)
      setCoords(res.data)
    })
    .catch((error) => console.error(error))
  }

  // Create new coord
  const handleCreate = (newCoords) => {
    axios.post(baseURL, newCoords)
    .then((res) => {
      console.log(res.data)
      let newCoords = [...coords, res.data]
      setCoords(newCoords)
    })
  }

  // Delete a coord
  const handleDelete = (deletedCoord) => {
    axios.delete(baseURL + deletedCoord._id)
    .then((res) => {
      
      let newCoords = coords.filter(coord => {
        return coord._id !== deletedCoord._id
      })
      setCoords(newCoords)
    })
  }

  // Edit/Update a coord
  const handleEdit = (updatedCoord) => {
    axios.put(baseURL + updatedCoord._id, updatedCoord)
    .then((res) => {
      console.log(res.data)

      let newCoords = coords.map(coord => {
        return coord._id !== updatedCoord._id ? coord : updatedCoord
      })
      setCoords(newCoords)
    })
  }

  useEffect(() => {
    getCoords()
  }, [])

  return(
    <>
      <h1>SaveTheRims</h1>
      <button onClick={() => handleGeolocate()}>Submit</button>
      <button onClick={() => getCoords()}>Get all records</button>
      {coords.map(coord => {
        return(
          <div key={coord._id}>
            <p>latitude: {coord.lat}, longitude: {coord.lng}</p>
          </div>
        )
      })}
    </>
  )
}

export default App;

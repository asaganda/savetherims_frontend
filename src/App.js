import { useState, useEffect} from 'react'
import axios from 'axios'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import List from './pages/List'
import Map from './pages/Map'
import Home from './pages/Home'
import Header from './component/Header'
import NavHeader from './component/NavHeader'

const App = () => {
  // States
  const [coords, setCoords] = useState([])
  // const [singleCoord, setSingleCoord] = useState({ lat: 0, lng: 0})

  // variables
  const baseURL = 'https://savetherims-backend.herokuapp.com/coord'

  // Functions
  const geolocate = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const coords = {
        lat: pos.coords.latitude, 
        lng: pos.coords.longitude 
      }
      console.log(coords)
      handleCreate(coords)
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
    axios.delete(baseURL + "/" + deletedCoord._id)
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
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home handleGeolocate={handleGeolocate}/>}></Route>
      </Route>
      <Route path="/list" element={<NavHeader/>}>
        <Route index element={<List coords={coords} handleDelete={handleDelete}/>}></Route>
      </Route>
      <Route path="/map" element={<NavHeader/>}>
        <Route index element={<Map />}></Route>
      </Route>
    </Routes>
  )
}

export default App;

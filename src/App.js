import { useState, useEffect} from 'react'
import axios from 'axios'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import List from './pages/List'
import Map from './pages/Map'
import Home from './pages/Home'
import Header from './component/Header'
import NavHeader from './component/NavHeader'
import EachCoordDetail from './component/EachCoordDetail'
import EachCoordEdit from './component/EachCoordEdit'
import NotFound from './pages/NotFound'

const App = () => {
  // States
  const [coords, setCoords] = useState([])
  const [submitStatus, setSubmitStatus] = useState(false)
  const [recordSuccess, setRecordSuccess] = useState(false)

  // variables
  const baseURL = 'https://savetherims-backend.herokuapp.com/coord'
  // const baseURL = 'http://localhost:3000/coord'

  // Functions
  const geolocate = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const coords = {
        lat: pos.coords.latitude, 
        lng: pos.coords.longitude
      }
      console.log(coords)
      handleCreate(coords)
      setSubmitStatus(false)
      setRecordSuccess(true)
      setTimeout(() => {
        setRecordSuccess(false)
      }, 2000);
    });
  }

  const handleGeolocate = () => {
    setSubmitStatus(true)
    geolocate()
  }

  // API requests
  // Getting all coords
  const getCoords = () => {
    axios.get(baseURL)
    .then((res) => {
      // console.log(res.data)
      let newData = res.data.map(coord => {
        (coord.fixed === false) ? coord.fixed = "false" : coord.fixed = "true"
        return coord
      })
      console.log(newData)
      setCoords(newData)
    })
    .catch((error) => console.error(error))
  }

  // Create new coord
  const handleCreate = (coordData) => {
    axios.post(baseURL, coordData)
    .then((res) => {
      res.data.fixed = "false"
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
    if (updatedCoord.fixed === "false") {
      updatedCoord.fixed = false
    } else if (updatedCoord.fixed === "true") {
      updatedCoord.fixed = true
    } else {
      console.log(`i should not see this`)
    }
    console.log(`updated coord info sending to db`)
    console.log(updatedCoord)
    axios.put(baseURL + "/" + updatedCoord._id, updatedCoord)
    .then((res) => {
      // if (updatedCoord.fixed === false) {
      //   updatedCoord.fixed = "false"
      // } else if (updatedCoord.fixed === true) {
      //   updatedCoord.fixed = "true"
      // } else {
      //   console.log(`i should not see this`)
      // }
      (updatedCoord.fixed === false) ? updatedCoord.fixed = "false" : updatedCoord.fixed = "true"
      console.log(`out of db into front end state`)
      console.log(updatedCoord)
      let newCoords = coords.map(coord => {
        return coord._id !== updatedCoord._id ? coord : updatedCoord
      })
      console.log('should see coords array state below')
      console.log(newCoords)
      setCoords(newCoords)
    })
  }

  useEffect(() => {
    getCoords()
  }, [])

  return(
    <BrowserRouter>
      <header className="text-center">
        <Routes>
          <Route index element={<Header/>}></Route>
          <Route path="/list" element={<NavHeader/>}>
            <Route path=":id" ></Route>
            <Route path=":id/edit" ></Route>
          </Route>
          <Route path="/map" element={<NavHeader/>}></Route>
        </Routes>
      </header>
      <main>
        <Routes>
            <Route index element={<Home handleGeolocate={handleGeolocate} submitStatus={submitStatus} recordSuccess={recordSuccess}/>}></Route>
            <Route path="/list">
              <Route index element={<List coords={coords} handleDelete={handleDelete}/>}></Route>
              <Route path=":id" element={<EachCoordDetail coords={coords} handleDelete={handleDelete}/>}></Route>
              <Route path=":id/edit" element={<EachCoordEdit coords={coords} handleEdit={handleEdit}/>}></Route>
            </Route>
            <Route path="/map" element={<Map coords={coords}/>}></Route>
            <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App;

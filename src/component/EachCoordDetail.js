import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"

const EachCoordDetail = (props) => {
    const { id } = useParams()
    const [coord, setCoord] = useState({})
    
    const filterForCoord = () => {
        const newCoord = props.coords.find(coord => coord._id === id)
        console.log(newCoord)
        setCoord(newCoord)
    }

    useEffect(() => {
        filterForCoord()
    }, [])

    return(
        <>
            <Link to="/list">Back to List</Link>
            <h2>Full Coord Detail</h2>
            <p>Coord id: {coord._id}</p>
            <p>Coord latitude: {coord.lat}</p>
            <p>Coord longitude: {coord.lng}</p>
        </>
    )
}

export default EachCoordDetail
import { useState, useEffect } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"

const EachCoordDetail = (props) => {
    const { id } = useParams()
    const [coord, setCoord] = useState({})
    const navigate = useNavigate()
    
    const filterForCoord = () => {
        const newCoord = props.coords.find(coord => coord._id === id)
        console.log(newCoord)
        setCoord(newCoord)
    }

    const deleteCoord = (coord) => {
        console.log('delete coord')
        console.log(coord)
        props.handleDelete(coord)
        navigate("/")
    }

    useEffect(() => {
        filterForCoord()
    }, [])

    return(
        <>
            <Link to="/list"><button>Back to List</button></Link>
            <h2>Full Coord Detail</h2>
            <p>Coord id: {coord._id}</p>
            <p>Coord latitude: {coord.lat}</p>
            <p>Coord longitude: {coord.lng}</p>
            <p>Coord Fixed: {coord.fixed === "false" ? "No" : "Yes"}</p>
            <button onClick={() => deleteCoord(coord)}>Delete</button>
            <Link to={`/list/${coord._id}/edit`}><button>Edit</button></Link>
        </>
    )
}

export default EachCoordDetail
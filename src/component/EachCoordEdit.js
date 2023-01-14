import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

const EachCoordEdit = (props) => {
    const [coord, setCoord] = useState({})
    const navigate = useNavigate()
    const { id } = useParams()

    const filterForCoord = () => {
        const newCoord = props.coords.find(coord => coord._id === id)
        console.log(newCoord)
        setCoord(newCoord)
    }

    const backToRecord = () => {
        navigate(-1)   
    }

    useEffect(() => {
        filterForCoord()
    })

    return(
        <>
            <button onClick={() => backToRecord()}>Back to List</button>
            <h1>Each Cord Edit Form</h1>
            <p>ID: {coord._id}</p>
            <p>lat: {coord.lat}</p>
            <p>long: {coord.lng}</p>
            {/* <form>

            </form> */}

        </>
    )
}

export default EachCoordEdit
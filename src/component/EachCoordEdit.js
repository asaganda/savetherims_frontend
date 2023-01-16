import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

const EachCoordEdit = (props) => {
    const [coord, setCoord] = useState({
        lat: 0,
        lng: 0,
        fixed: false
    })
    const navigate = useNavigate()
    const { id } = useParams()

    const filterForCoord = () => {
        const newCoord = props.coords.find(coord => coord._id === id)
        console.log(`filtered out below:`)
        console.log(newCoord)
        setCoord(newCoord)
    }

    const handleFixed = (event) => {
        console.log(`coord below is what should be changing:`)
        setCoord({...coord, [event.target.name]: event.target.value})
        console.log(coord)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(`this is from edit form submit`)
        console.log(coord)
        props.handleEdit(coord)
        navigate("/list")
    }

    const backToRecord = () => {
        navigate(-1)   
    }

    useEffect(() => {
        filterForCoord()
    }, [])

    return(
        <>
            <button onClick={() => backToRecord()}>Back to List</button>
            <h1>Each Cord Edit Form</h1>
            <p>ID: {coord._id}</p>
            <p>lat: {coord.lat}</p>
            <p>long: {coord.lng}</p>
            <p>{coord.fixed}</p>
            <form onSubmit={handleSubmit}>
                {/* <label>
                    Latitude: <input name="lat"/>
                </label>
                <br />
                <label>
                    Longitude: <input name="lng"/>
                </label> */}
                <div>
                    <span>Fixed?</span>
                    <label>
                        <input type="radio" value="true" name="fixed" checked={coord.fixed === "true"} onChange={handleFixed}/>
                        Yes
                    </label>
                    <label>
                        <input type="radio" value="false" name="fixed" checked={coord.fixed === "false"} onChange={handleFixed}/>
                        No
                    </label>
                </div>
                <input type="submit" value="Update"/>
            </form>
        </>
    )
}

export default EachCoordEdit
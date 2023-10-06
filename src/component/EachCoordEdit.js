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
        setCoord({...coord, [event.target.name]: (event.target.value === "true") ? true : false })
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
        <div className="px-4 pb-4 pt-36">
            <div className="flex justify-center">
                <button onClick={() => backToRecord()} className="bg-brand_orange px-4 py-2 text-black font-bold tracking-widest rounded-2xl w-3/6 mb-4">Back to List</button>
            </div>
            <div className="bg-[#e0fbfc] px-5 py-4 rounded-lg">
                <p className="border-b border-black w-10/12">ID: {coord._id}</p>
                <div className="flex flex-col">
                    <p className="border-b border-black w-10/12">Latitude: {coord.lat}</p>
                    <p className="border-b border-black w-10/12">Longitude: {coord.lng}</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <span className="mr-8">Fixed?</span>
                        <label>
                            <input type="radio" value="true" name="fixed" checked={coord.fixed === true} onChange={handleFixed}/>
                            Yes
                        </label>
                        <label>
                            <input type="radio" value="false" name="fixed" checked={coord.fixed === false} onChange={handleFixed}/>
                            No
                        </label>
                    </div>
                    <input className="border-2 border-green-800 px-4 py-2 rounded-2xl" type="submit" value="Update"/>
                </form>
            </div>
        </div>
    )
}

export default EachCoordEdit
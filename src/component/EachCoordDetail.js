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
        <div className="px-4 pb-4">
            <div className="flex justify-center">
                <Link to="/list" className="text-center w-full"><button className="bg-brand_orange px-4 py-2 text-black font-bold tracking-widest rounded-2xl mb-4 w-3/6">Back to List</button></Link>
            </div>
            <div className="bg-[#e0fbfc] px-5 py-4 rounded-lg">
                <p className="border-b border-black w-10/12">ID: {coord._id}</p>
                <p className="border-b border-black w-10/12">Latitude: {coord.lat}</p>
                <p className="border-b border-black w-10/12">Longitude: {coord.lng}</p>
                <p>Fixed: {coord.fixed === "false" ? "No" : "Yes"}</p>
                <div className="flex justify-end mt-3">
                    <button onClick={() => deleteCoord(coord)} className="bg-[#f73b0c] py-2 px-4 rounded-2xl text-black ml-4">Delete</button>
                    <Link to={`/list/${coord._id}/edit`}><button className="border-[#188386] border-2 py-2 px-4 rounded-2xl text-black ml-4">Edit</button></Link>
                </div>
            </div>
        </div>
    )
}

export default EachCoordDetail
// import { useState } from 'react'
import { Link } from 'react-router-dom'

const List = (props) => {

    const deleteCoord = (coord) => {
        console.log('delete coord')
        console.log(coord)
        props.handleDelete(coord)
    }

    return(
        <div className="p-4">
            <h2 className="font-sans font-bold border-b border-[#ee6c4d] w-full">List of records</h2>
            {props.coords.map(coord => {
                return(
                <div key={coord._id} className="bg-[#e0fbfc] border my-5 rounded-lg px-5 py-4 font-sans">
                    <Link to={`/list/${coord._id}`}>
                        <p>ID: {coord._id}</p>
                        <p>latitude: {coord.lat}, longitude: {coord.lng}</p>
                    </Link>
                    <div className="flex justify-end mt-3">
                        <button onClick={() => deleteCoord(coord)} className="bg-[#f73b0c] py-2 px-4 rounded-2xl text-black">Delete</button>
                        <Link to={`/list/${coord._id}/edit`}><button className="border-[#188386] border-2 py-2 px-4 rounded-2xl text-black ml-4">Edit</button></Link>
                    </div>
                </div>
                )
            })}
        </div>
    )
}

export default List
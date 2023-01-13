// import { useState } from 'react'
import { Link } from 'react-router-dom'

const List = (props) => {

    const deleteCoord = (coord) => {
        console.log('delete coord')
        console.log(coord)
        props.handleDelete(coord)
    }

    return(
        <>
            {/* <Link to="/"><button>Back to Home</button></Link> */}
            <h2>List of records</h2>
            {props.coords.map(coord => {
                return(
                <div key={coord._id}>
                    <Link to={`/list/${coord._id}`}>
                        <h4>Each coord record</h4>
                        <p>ID: {coord._id}</p>
                        <p>latitude: {coord.lat}, longitude: {coord.lng}</p>
                    </Link>
                    <button onClick={() => deleteCoord(coord)}>Delete</button>
                    <button>Update</button>
                </div>
                )
            })}
        </>
    )
}

export default List
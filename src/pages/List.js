// import { useState } from 'react'
import { Link } from 'react-router-dom'
import EachCoord from '../component/EachCoord.js'

const List = (props) => {

    return(
        <>
            {/* <Link to="/"><button>Back to Home</button></Link> */}
            <h2>List of records</h2>
            <EachCoord coords={props.coords} handleDelete={props.handleDelete}/>
        </>
    )
}

export default List
const EachCoord = (props) => {

    const deleteCoord = (coord) => {
        console.log('delete coord')
        console.log(coord)
        props.handleDelete(coord)
    }

    return(
        <>
            
            {props.coords.map(coord => {
                return(
                <div key={coord._id}>
                    <h4>Each coord record</h4>
                    <p>ID: {coord._id}</p>
                    <p>latitude: {coord.lat}, longitude: {coord.lng}</p>
                    <button onClick={() => deleteCoord(coord)}>Delete</button>
                    <button>Update</button>
                </div>
                )
            })}
        </>
    )
}

export default EachCoord
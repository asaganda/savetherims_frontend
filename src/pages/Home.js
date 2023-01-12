import { Link } from 'react-router-dom'

const Home = (props) => {
    return(
        <>
            <h1>SaveTheRims</h1>
            <button onClick={() => props.handleGeolocate()}>Submit</button>
            <Link to="/list"><button>Go to List page</button></Link>
            <Link to="/map"><button>Go to Map page</button></Link>
        </>
    )
}

export default Home
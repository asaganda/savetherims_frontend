import { Link } from 'react-router-dom'

const Home = (props) => {
    return(
        <>
            {props.submitStatus && <h3>Recording location..</h3>}
            {props.recordSuccess && <h3>Success</h3>}
            <button onClick={() => props.handleGeolocate()}>Submit</button>
            <Link to="/list"><button>Go to List page</button></Link>
            <Link to="/map"><button>Go to Map page</button></Link>
        </>
    )
}

export default Home
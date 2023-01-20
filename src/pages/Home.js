import { Link } from 'react-router-dom'

const Home = (props) => {
    return(
        <>
            {props.submitStatus && <h3>Recording location..</h3>}
            {props.recordSuccess && <h3>Success</h3>}
            <div className="h-full flex items-center justify-center">
                <button className="bg-[#ee6c4d] p-14 rounded-full text-black font-bold tracking-widest" onClick={() => props.handleGeolocate()}>Submit</button>
            </div>
            <div className="absolute bottom-0 mb-10 w-full flex justify-evenly">
                {/* <p className="italic">Click one of the below options to view:</p> */}
                <Link to="/list"><button className="bg-[#ee6c4d] p-4 text-black font-bold tracking-widest rounded-l-2xl">View List</button></Link>
                <Link to="/map"><button className="bg-[#ee6c4d] p-4 text-black font-bold tracking-widest rounded-r-2xl">View Map</button></Link>
            </div>
        </>
    )
}

export default Home
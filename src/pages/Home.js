import { Link } from 'react-router-dom'

const Home = (props) => {
    return(
        <div className="fixed top-60 w-full h-[45vh] flex flex-col justify-between">
            {props.submitStatus && 
            <div className="w-full flex justify-center">
                <div className="absolute top-24 bg-green-200 w-11/12 py-4 rounded-xl text-center text-3xl">Recording location...</div>
            </div>
            }
            {props.recordSuccess && 
            <div className="w-full flex justify-center">
                <div className="absolute top-24 bg-green-700 w-11/12 py-4 rounded-xl text-center text-3xl">Success</div>
            </div>
            }
            
            <div className="flex items-center justify-center">
                <button className="bg-brand_orange p-14 rounded-full text-black font-bold tracking-widest floating" onClick={() => props.handleGeolocate()}>Submit</button>
            </div>
            <div className="w-full flex justify-evenly">
                <Link to="/list"><button className="bg-brand_orange p-4 text-black font-bold tracking-widest rounded-l-2xl">View List</button></Link>
                <Link to="/map"><button className="bg-brand_orange p-4 text-black font-bold tracking-widest rounded-r-2xl">View Map</button></Link>
            </div>
        </div>
    )
}

export default Home
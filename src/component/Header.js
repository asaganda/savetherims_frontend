import { useState } from "react"
import { Outlet } from "react-router-dom"
import TailwindHeaderBrand from "./TailwindHeaderBrand"
import { InformationCircleIcon } from "@heroicons/react/24/outline"

const Header = () => {
    const [popup, setPopup] = useState(false)

    const togglePopup = () => {
        setPopup(popup => !popup)
    }

    return(
        <>
            <TailwindHeaderBrand>
                SaveTheRims
                <InformationCircleIcon className="h-6 w-6 absolute right-0 mr-10" onClick={() => togglePopup()}/>
                {popup ? 
                <div className="h-[26em] w-10/12 px-3 py-4 absolute top-20 bg-white font-normal rounded-2xl border-black border">
                    <h3>App Information</h3>
                    <p className="pb-3">This app makes it possible for a user to record potholes as they're driving. A user can view the recorded potholes in a list or map view, mark a pothole as fixed, and delete the record</p>
                    <p>Instructions: Record a new pothole by tapping "Submit" button. You will see a status message at the top alerting your location has been recorded successfully</p>
                    <button className="bg-brand_orange px-5 py-1 font-semibold rounded-2xl mt-3.5" onClick={() => togglePopup()}>Close</button>
                </div> 
                : null}
            </TailwindHeaderBrand>
            <Outlet/>
        </>
    )
}

export default Header
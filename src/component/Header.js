import { Outlet } from "react-router-dom"
import TailwindHeaderBrand from "./TailwindHeaderBrand"
import { InformationCircleIcon } from "@heroicons/react/24/outline"

const Header = () => {
    return(
        <>
            <TailwindHeaderBrand>
                SaveTheRims
                <InformationCircleIcon className="h-6 w-6"/>
            </TailwindHeaderBrand>
            <Outlet/>
        </>
    )
}

export default Header
import { Outlet } from "react-router-dom"
import TailwindHeaderBrand from "./TailwindHeaderBrand"

const Header = () => {
    return(
        <>
            <TailwindHeaderBrand>
                SaveTheRims
            </TailwindHeaderBrand>
            <Outlet/>
        </>
    )
}

export default Header
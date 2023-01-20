import { Link, Outlet } from "react-router-dom"
import TailwindHeaderBrand from "./TailwindHeaderBrand"

const NavHeader = () => {
    return(
        <>
            <TailwindHeaderBrand>
                SaveTheRims
            </TailwindHeaderBrand>
            <Link to="/"><button>Home</button></Link>
            <Outlet />
        </>
    )
}

export default NavHeader
import { Link, Outlet } from "react-router-dom"
import TailwindHeaderBrand from "./TailwindHeaderBrand"
import TailwindHomeBtn from "./TailwindHomeBtn"

const NavHeader = () => {
    return(
        <>
            <TailwindHeaderBrand>
                SaveTheRims
            </TailwindHeaderBrand>
            <Link to="/">
                <TailwindHomeBtn>Home</TailwindHomeBtn>
            </Link>
            <Outlet />
        </>
    )
}

export default NavHeader
import { Link, Outlet } from "react-router-dom"

const NavHeader = () => {
    return(
        <>
            <Link to="/"><button>Back</button></Link>
            <Outlet />
        </>
    )
}

export default NavHeader
import { Link, Outlet } from "react-router-dom"

const NavHeader = () => {
    return(
        <>
            <h2>SaveTheRims</h2>
            <Link to="/"><button>Home</button></Link>
            <Outlet />
        </>
    )
}

export default NavHeader
import { Link, Outlet } from "react-router-dom"

const NavHeader = () => {
    return(
        <>
            <h1>SaveTheRims</h1>
            <Link to="/"><button>Home</button></Link>
            <Outlet />
        </>
    )
}

export default NavHeader
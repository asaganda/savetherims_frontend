import { Link, Outlet } from "react-router-dom"

const NavHeader = () => {
    return(
        <>
            <header>
                <h2>SaveTheRims</h2>
                <Link to="/"><button>Home</button></Link>
            </header>
            <Outlet />
        </>
    )
}

export default NavHeader
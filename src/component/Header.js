import { Outlet } from "react-router-dom"

const Header = () => {
    return(
        <>
            <h2>SaveTheRims</h2>
            <Outlet/>
        </>
    )
}

export default Header
import { Outlet } from "react-router-dom"

const Header = () => {
    return(
        <>
            <header>
                <h2>SaveTheRims</h2>
            </header>
            <Outlet/>
        </>
    )
}

export default Header
import { Outlet } from "react-router-dom"

const Header = () => {
    return(
        <>
            <h1 className="inline bg-orange-500">SaveTheRims</h1>
            <Outlet/>
        </>
    )
}

export default Header
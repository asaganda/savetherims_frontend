import { Outlet } from "react-router-dom"

const Header = () => {
    return(
        <>
            <h1 className="text-black font-bold tracking-widest">SaveTheRims</h1>
            <Outlet/>
        </>
    )
}

export default Header
import { Outlet } from "react-router-dom"
import TailwindHeaderBrand from "./TailwindHeaderBrand"

const Header = () => {
    return(
        <>
            {/* <h1 className="py-6 bg-[#ee6c4d] text-black font-bold tracking-widest"></h1> */}
            <TailwindHeaderBrand>
                SaveTheRims
            </TailwindHeaderBrand>
            <Outlet/>
        </>
    )
}

export default Header
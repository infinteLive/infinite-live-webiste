
import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import FloatingButton from "./components/FloatingButton."


const BaseLayout = () => {
    return (
        <div>
            <Navbar/>
            <FloatingButton/>
            <Outlet/>
        </div>
    )
}

export default BaseLayout
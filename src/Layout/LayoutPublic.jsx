
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const LayoutPublic = () => {
    return (
        <div>
            <NavBar />
                 <main className="container">
                    <Outlet />
                 </main>
            <Footer />
        </div>
    )
}

export default LayoutPublic;
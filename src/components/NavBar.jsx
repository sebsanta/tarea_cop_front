import { NavLink } from "react-router-dom"

const NavBar = () => {
    return(
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <NavLink to="/" className="btn btn-outline-primary">Home</NavLink>
                <NavLink to="/axios" className="btn btn-outline-primary">Axios</NavLink>
                <NavLink to="/redux" className="btn btn-outline-primary">Redux</NavLink>
            </div>
        </nav>
    )
}

export default NavBar;
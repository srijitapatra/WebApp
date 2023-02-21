import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="nav-bar">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    Demo-App
                </Link>
                <div className="navbar-nav">
                    <NavLink className="nav-link" to="/login">
                        Login
                    </NavLink>
                    <NavLink className="nav-link" to="/register">
                        Register
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
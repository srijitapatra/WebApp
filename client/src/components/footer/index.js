import { Link, NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <Link className="navbar-brand" to="/">
                            Demo-App
                        </Link>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="navbar-nav">
                            <NavLink className="nav-link" to="/login">
                                Login
                            </NavLink>
                            <NavLink className="nav-link" to="/register">
                                Register
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
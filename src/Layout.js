import { Link, Outlet } from "react-router-dom";
import 'bootstrap'

function Layout() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/estadisticas">Estadisticas</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contacto">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />



        </>


    )
}

export default Layout;
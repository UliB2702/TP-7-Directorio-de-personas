import { Link, Outlet } from "react-router-dom";

function Layout(){
    return(
        <>
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/persona">Personas</Link>
                <Link to="/estadisticas">Estadisticas</Link>
                <Link to="/contacto">Contact</Link>
            </nav>
            <Outlet/>
        </>
    )
}

export default Layout;
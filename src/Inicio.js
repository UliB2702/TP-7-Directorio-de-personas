import { Link } from "react-router-dom";
import Personas from "./Personas.json";
import './App.css';
import 'bootstrap'


function Inicio(){
    return(
        <div className="App Contenedor-Mayor letra">
        {
            
            Personas.map((persona) => {
                return(
                <div key={persona.id}> 
                <h1>{persona.nombre}</h1>
                <h4>{persona.apellido}</h4>
                <button type="button" className="btn btn-link"><Link to={`/persona/${persona.id}`}> Ver la informacion completa de {persona.nombre} </Link></button>
                <hr></hr>
                </div>
                )
            })
        }
        </div>
    )
}

export default Inicio;
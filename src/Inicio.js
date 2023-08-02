import { Link } from "react-router-dom";
import Personas from "./Personas.json";
import './App.css';


function Inicio(){
    return(
        <div className="App">
        {
            Personas.map((persona) => {
                return(
                <div key={persona.id}> 
                <h1>{persona.nombre}</h1>
                <h4>{persona.apellido}</h4>
                <Link to={`persona/${persona.id}`}> {persona.nombre} </Link>
                <hr></hr>
                </div>
                )
            })
        }
        </div>
    )
}

export default Inicio;
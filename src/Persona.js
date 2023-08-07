import './App.css';
import React from 'react';
import Personas from './Personas.json';
import { useParams } from 'react-router-dom';
import 'bootstrap'

function Persona() {
    const { id } = useParams();
    const persona = Personas.find((p) => p.id === id)

    if (!persona) {
        return <div className="App"> No se encontro a ninguna persona </div>
    }
    else {
        return (
            <div className="App">
                <h1>{persona.nombre}</h1>
                <h2>{persona.apellido} ({persona.edad})</h2>
                <pre>{persona.email}</pre>
            </div>


        )

    }
}

export default Persona;
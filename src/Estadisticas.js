import './App.css';
import React from 'react';
import Personas from './Personas.json';


function Estadisticas(){
    var contadorDePersonas = 0
    var personaMayor = undefined
    var personaMenor = undefined
    Personas.forEach(p => {
        if(p.edad > 35)
        {
            contadorDePersonas += 1
        }
        if(personaMayor === undefined || p.edad > personaMayor.edad)
        {
            personaMayor = p
        }
        if(personaMenor === undefined || p.edad < personaMenor.edad)
        {
            personaMenor = p
        }
    });

    return(
        <div className="App">
            <h2> Personas mayores a 35 años: {contadorDePersonas} </h2> <br/> <br/>
            <h2> Persona con la mayor edad: {personaMayor.nombre} </h2> <br/> <br/>
            <h2> Persona con la menor edad: {personaMenor.nombre} </h2> <br/> <br/>
        </div>
    )
}

export default Estadisticas;
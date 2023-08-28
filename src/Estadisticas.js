import './App.css';
import React from 'react';
import Personas from './Personas.json';


function Estadisticas() {
    var contadorDePersonas = 0
    var personaMayor = undefined
    var personaMenor = undefined
    Personas.forEach(p => {
        if (p.edad > 35) {
            contadorDePersonas += 1
        }
        if (personaMayor === undefined || p.edad > personaMayor.edad) {
            personaMayor = p
        }
        if (personaMenor === undefined || p.edad < personaMenor.edad) {
            personaMenor = p
        }
    });

    return (
        <>
            <head>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous"></link>
            </head>
            <body>
                <div className="App Contenedor-Mayor letra">
                    <div class="card">
                        <div class="card-body">
                             Personas mayores a 35 años: {contadorDePersonas} persona/s
                        </div>
                    </div> <br /> <br />
                    <div class="card">
                        <div class="card-body">
                        Persona con la mayor edad: {personaMayor.nombre}
                        </div>
                    </div> <br /> <br />
                    <div class="card">
                        <div class="card-body">
                        Persona con la menor edad: {personaMenor.nombre}
                        </div>
                    </div> <br /> <br />
                </div>
                <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.min.js" integrity="sha384-Rx+T1VzGupg4BHQYs2gCW9It+akI2MM/mndMCy36UVfodzcJcF0GGLxZIzObiEfa" crossorigin="anonymous"></script>
            </body>
        </>
    )
}

export default Estadisticas;
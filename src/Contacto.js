import './App.css';
import 'bootstrap'

function Contacto(){
    return(
        <>
        <head> 
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous"></link>
            </head>
        <body>
        <form className='centrar'>
        <div className="App Contenedor-Mayor letra ">
            <h1>Ingrese los datos para agregar a una persona a la lista: </h1>
            <form>
            <label class="form-label"> Ingresa el nombre de la persona </label> <br/> 
            <input type='text' class="form-control" id='nombre'/> <br/> <br/>
            <label class="form-label">  Ingresa el apellido de la persona  </label><br/>
            <input type='text' class="form-control" id='apellido'/> <br/> <br/>
            <label class="form-label"> Ingresa la edad de la persona </label> <br/>
            <input type='number' class="form-control" id='edad' /> <br/> <br/>
            <label class="form-label"> Ingresa el email de la persona </label> <br/>
            <input type='email'  class="form-control " id='email' /> <br/><br/>
            <button type='submit' className='btn btn-primary'> Enviar los datos </button><br/>
            </form>
        
        </div>
        </form>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.min.js" integrity="sha384-Rx+T1VzGupg4BHQYs2gCW9It+akI2MM/mndMCy36UVfodzcJcF0GGLxZIzObiEfa" crossorigin="anonymous"></script>
        </body>
        </>
    )
}

export default Contacto;
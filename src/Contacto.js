import './App.css';
import 'bootstrap'

function Contacto(){
    return(
        <>
        <div className="App">
            <h1>Ingrese los datos para agregar a una persona a la lista</h1>
            <form>
            <label> Ingresa el nombre de la persona </label> <br/> 
            <input type='text' id='nombre'/> <br/> <br/>
            <label>  Ingresa el apellido de la persona  </label><br/>
            <input type='text' id='apellido'/> <br/> <br/>
            <label> Ingresa la edad de la persona </label> <br/>
            <input type='number' id='edad' /> <br/> <br/>
            <label> Ingresa el email de la persona </label> <br/>
            <input type='email' id='email'/> <br/><br/>
            <button type='submit' className='btn btn-primary'> Enviar los datos </button><br/>
            </form>
        
        </div>
        </>
    )
}

export default Contacto;
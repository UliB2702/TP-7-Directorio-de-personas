import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from './Layout';
import Inicio from './Inicio';
import Persona from './Persona';
import Estadisticas from './Estadisticas';
import Contacto from './Contacto';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}></Route>
        <Route path='/home' element={<Inicio/>}></Route>
        <Route path='/persona/:id' element={<Persona/>}></Route>
        <Route path='/estadisticas' element={<Estadisticas/>}></Route>
        <Route path='/contacto' element={<Contacto/>}></Route>
        <Route></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

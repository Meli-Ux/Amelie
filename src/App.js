import React  from "react";
import './componentes/NavBar';
import './App.css';
import NavBar from './componentes/NavBar';
import ItemListColeccion from './componentes/ItemListContainer';
import ItemDetailContainer from "./componentes/ItemDetailContainer";


const coleccionFuncion = {
  temporada: 'Primavera Verano',
  descripcion: ' casual-sport',

};

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar />
      </header>

<main  className='mainContenedor'>
      <ItemListColeccion 
       temporada ={coleccionFuncion.temporada}
       descripcion={coleccionFuncion.descripcion}   
       
      />
      <ItemDetailContainer/>

</main>
    </div>
    
  );
}

export default App;

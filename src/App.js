import React  from "react";
import './componentes/NavBar';
import './App.css';
import NavBar from './componentes/NavBar';
import ItemListColeccion from './componentes/ItemListContainer';




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

<main>
  <div className='mainContenedor'>
      <ItemListColeccion 
       temporada ={coleccionFuncion.temporada}
       descripcion={coleccionFuncion.descripcion}    
      />
      

</div>
</main>

<footer>
  
</footer>
  

    </div>
    
  );
}

export default App;

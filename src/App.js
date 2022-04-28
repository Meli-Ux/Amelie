import React from "react"
import './componentes/NavBar'
import './App.css'
import NavBar from './componentes/NavBar'
import ItemListColeccion from './componentes/ItemListContainer'
import ItemDetailContainer from "./componentes/ItemDetailContainer"
import {BrowserRouter,  Routes, Route} from 'react-router-dom'
import ItemPortada from "./componentes/pages/ItemPortada"
import ItemCartPage from "./componentes/pages/ItemCartPage"
import { CartProvider } from "./componentes/context/CartContext"
import Checkout from "./componentes/Checkout/Checkout"
import Footer from "../src/componentes/pages/footer"




const coleccionFuncion = {
  temporada: 'Primavera Verano',
  descripcion: 'Magia, amanecer y colores',
  moda: 'Tendencia a cada paso ',
  tendencia: ' Elige tu estilo',
};

function App() {


  return (
    <CartProvider>

 <BrowserRouter>
 <NavBar />
<Routes>
    <Route path="/" element={<ItemPortada
     temporada ={coleccionFuncion.temporada}
     descripcion={coleccionFuncion.descripcion} 
     moda={coleccionFuncion.moda}   
     tendencia={coleccionFuncion.tendencia}         
    />}/>
      <Route path="/destacados" element={ <ItemListColeccion />} />
      <Route path="/category/:categoryId" element={<ItemListColeccion />} />
      <Route path="/detail/:itemId" element={<ItemDetailContainer/>} />
      <Route path="/cart" element={<ItemCartPage/>} />
      <Route path="/Checkout" element={<Checkout/>} />
    </Routes>
    <Footer />
    </BrowserRouter>
    </CartProvider>

  );
}

export default App;

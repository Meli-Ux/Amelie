import React, { useState }  from "react"
import './componentes/NavBar'
import './App.css'
import NavBar from './componentes/NavBar'
import ItemListColeccion from './componentes/ItemListContainer'
import ItemDetailContainer from "./componentes/ItemDetailContainer"
import {BrowserRouter,  Routes, Route} from 'react-router-dom'
import ItemPortada from "./componentes/pages/ItemPortada"
import ItemCartPage from "./componentes/pages/ItemCartPage"
import { CartContext } from "./componentes/context/CartContext"






const coleccionFuncion = {
  temporada: 'Primavera Verano',
  descripcion: ' casual-sport',

};

function App() {

const [cart, setCart]= useState([])

const addItem = (item) =>{
  setCart([...cart, item, isInCart])
}




 const isInCart = id => {
  return cart.some([prod => prod === id]) // EL ID ME ROMPE EL CODIGO
 }

  return (

   < CartContext.Provider value={{
     cart,
     addItem,
     isInCart
     
     }}>
   
 <BrowserRouter>
 <NavBar />
<Routes>
    <Route path="/" element={<ItemPortada
     temporada ={coleccionFuncion.temporada}
     descripcion={coleccionFuncion.descripcion}     
    />}/>
      <Route path="/destacados" element={ <ItemListColeccion />} />
      <Route path="/category/:categoryId" element={<ItemListColeccion />} />
      <Route path="/detail/:itemId" element={<ItemDetailContainer/>} />
      <Route path="/cart" element={<ItemCartPage/>} />


    </Routes>
    </BrowserRouter>

    </CartContext.Provider>
  
   
  );
}

export default App;

import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

import { Link } from 'react-router-dom';

const ItemCartPage = () => {

  const {cart, cartTotal, emptyCart ,removeItem } = useContext (CartContext)

  console.log(cart)

  if(cart.length === 0){
    return <div className='contenedorCarVacio' >
      <h1 className='CartVacioTitulo'>Tu carrito esta vacio</h1>
      <hr />
      <p> Vuelve al shop de compras </p>
      <Link to={"/destacados"} className="btnCartVacio" > Volver </Link>

    </div>
  }

  return (
    <div className='itemCartPage'>
   <h1 className='tituloCartPage'>TUS COMPRAS</h1>
   <hr/>

   {
     cart.map((item)=>(
       <div key={item.id} className='cartMap'>
         <img src={item.img} className="imgProducto" alt="logo" />
       
         <div className='contendorMapInf'>
         <h4 className='tituloProducto'>{item.producto} </h4>
         <p className='parrafoItemCart'> Cantidad seleccionada:<b> {item.contador}</b> </p>
         <p className='parrafoItemCart'>Talle seleccionado: <b> {item.talle}</b> </p>
    
         <p className='parrafoItemCart'> Precio: $<b> {item.precio * item.contador}</b></p>
    
         <button className='btnBasura' onClick={()=> removeItem(item.id)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
         <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
         <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
         </svg></button> 
         <hr />
         </div>
         </div>
          
     ))
   } 
   <h3 className='tituloProducto'> Total: $ <b>{cartTotal()}</b>  </h3>
   <hr/>
   <div className='contenedorBtnCart' >
   <Link to={"/checkout"} className='btnTerminarCompras' > Terminar mi compra </Link>
   <button className='btnVaciar' onClick={emptyCart}> Vaciar Carrito</button>
  </div>
    </div>
   
  );


};

export default ItemCartPage ;

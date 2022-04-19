import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

import { Link } from 'react-router-dom';

const ItemCartPage = () => {

  const {cart, cartTotal, emptyCart ,removeItem } = useContext (CartContext)

  console.log(cart)

  if(cart.length === 0){
    return <div>
      <h2>Tu carrito esta vacio</h2>
      <hr />
      <h5> Vuelve al shop de compras </h5>
      <Link to={"/destacados"}> Volver </Link>

    </div>
  }

  return (
    <div className='itemCartPage'>

   <h1>Tus compras</h1>
   <hr/>

   {
     cart.map((item)=>(
       <div key={item.id} className='cartMap'>
         <img src={item.img} className="imgProducto" alt="logo" />
       
         <div className='contendorMapInf'>
         <h4>{item.producto} </h4>
         <p>Cantidad: {item.contador} </p>
      
         <h5>Precio: ${item.precio * item.contador}</h5>
    
         <button className='btnBasura' onClick={()=> removeItem(item.id)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
         <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
         <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
         </svg></button> 
         <hr />
         </div>
         </div>
          
     ))
   } 
   <h3>total: ${cartTotal()} </h3>
   <hr/>
   <button className='btnVaciar' onClick={emptyCart}> Vaciar Carrito</button>
   <Link to={"/checkout"} className='btnVaciar' > Terminar mi compra </Link>

    </div>
   
  );


};

export default ItemCartPage ;

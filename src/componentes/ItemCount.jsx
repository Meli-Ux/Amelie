import React, { useState } from 'react';


const Cart = ( {stock , onAdd}) => {
const [contador, setContador] = useState(0);
  
const addToCount = () =>{

  if( contador < stock ){
    setContador((prevCount) => prevCount + 1);
  } 
 };

 const substractToCount = () =>{
  if( contador === 0 ){
    return;
  } 
  if( contador  > 0 ) {
    setContador((prevCount) => prevCount - 1);
  } 
 };

const addToCart = () => {
onAdd(contador);
};



return <div  className='contadorCart'>

<div className = "ContenedorContador">    
<button onClick={addToCount} type="button" className={ contador < stock  ? "btn btn-outline-primary" : "btn btn-outline-danger"}>+</button>
<span className='contador'>{contador}</span>
<button  onClick={substractToCount} type="button" className={ contador > 1 ? "btn btn-outline-primary" : "btn btn-outline-danger"}>-</button>
  </div>   

  <div> 
   <button onClick={addToCart} type="button" className="btnCarrito">Agregar Al carrito</button></div>
    </div>;
  };

  export default Cart;
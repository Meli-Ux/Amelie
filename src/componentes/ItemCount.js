import React, { useState } from 'react';



const Cart = ( {stock , initial, onAdd}) => {
  const [contador, setContador] = useState(initial);

  
const clickSum = () =>{

  if( contador === stock ){
    return;
  } 
  
  setContador(contador + 1);


 };


 const clickRest = () =>{
  if( contador === 0 ){
    return;
  } 

  setContador(contador - initial);

 };




const addToCart = () => {
onAdd(contador);
};



return <div  className='contadorCart'>


<div className = "ContenedorContador">    
<button onClick={() => clickSum()} type="button" class="btnCard btnW btn-secondary">+</button>
<p className='contador'>{contador}</p>
<button  onClick={() => clickRest()} type="button" class="btnCard btn-secondary">-</button>
  </div>   

  <div> 
   <button onClick={() => addToCart()} type="button" class="btnCarrito">ADD</button></div>

   
    </div>;
  };
  export default Cart;
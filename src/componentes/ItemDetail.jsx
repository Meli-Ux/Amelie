import React, { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import { CartContext } from "./context/CartContext";
import Cart from "./ItemCount";
import Select from "./select/select";


const stock = 9;

const options =[
    {value: 'rojo', text: 'Rojo'},
    {value: 'verde', text: 'Verde'},
    {value: 'blanco', text: 'Blanco'}

]

const ItemDetail = ({ productDetail }) =>{


const { addItem, isInCart } = useContext(CartContext)

//console.log(isInCart(productDetail.id))

const [contador, setContador] = useState(0)
const [color, setColor]= useState('rojo')
const {id , img, producto, precio, imgDetail, descripcionDetail, stockDestacados } = productDetail


const agregarAlcarrito =(contador) =>{


    const itemToAdd = {
        id,
        color,
        producto,
        precio,
        img,
        contador
        
    }


   contador > 0 &&  addItem(itemToAdd) 

}
  
    return(
        <div className="contenedorDetail">
           <div className="contenedorMuestraImg">
            <div className="contenedorMiniMuestra">
                <div className="miniProduct">
              <Link to="/# "> <img className="imgDetail" src={ imgDetail} alt={producto} /></Link> 
              <Link to="/# ">   <img className="imgDetail" src={img} alt={producto} /></Link> 
              <Link to="/# ">  <img className="imgDetail" src={img} alt={producto} /></Link> 
                </div>
            </div>
            <div className="contenedorProductoVista">
           <img className="productoI" src={img} alt={producto} />
        </div>
           </div>
            <div className="detailProduct">
                <div className="contenedorInfDetail">
            <h2 className="tituloDetail">{producto} </h2> 
            <p className="descripcionProducto"> {descripcionDetail} </p>
            <p className="precioDetail"> {precio} </p>
            <hr />
             <div className="contenedorTallas">
                 <p>Selecciona tu talla</p>
                 <Select   
    options={options}
    onSelect={setColor}     
    />

    <div>
        <p>Stock disponible {stockDestacados} </p>
    
        {stockDestacados === 0 && <p className="stockCantidad"> Item sin stock</p>  }
    
     
    </div>
            
             </div>
             <hr />
    
             </div>

 {
   stockDestacados > 0 &&
   <>
   
   <p className="parrafoCantidad">Selecciona cantidad </p>

   {
    !isInCart(productDetail.id)
    ?      
    <Cart 
    stock={stock} 
    onAdd={agregarAlcarrito} 
    addToCart = {contador} 
    setContador= {setContador}/>
    : <Link to="/cart" className="cartProductos" >Terminar mi compra</Link>
    
}
</>


}



<div className="contenedorConteoCart">
             <Link to="/destacados" className="cartProductos" >Volver</Link>
 </div>


            </div>
        </div>
    )
}
export default ItemDetail;
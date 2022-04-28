import React, { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import { CartContext } from "./context/CartContext";
import Cart from "./ItemCount";
import Select from "./select/select";


const stock = 15;

const options =[
    {value: 'talleS', text: ' S'},
    {value: 'talleM', text:  '  M'},
    {value: 'talleL', text: ' L'},
    {value: 'talleXl', text: ' XL'}


]

const ItemDetail = ({ productDetail }) =>{

const { addItem, isInCart } = useContext(CartContext)

const [contador, setContador] = useState(0)
const [talle, setTalle]= useState('S')
const {id , img, producto, precio,  descripcionDetail, stockDestacados } = productDetail


const agregarAlcarrito =(contador) =>{


    const itemToAdd = {
        id,
        talle,
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
                <div className="miniProduct">
              <Link to="/# "> <img className="imgDetail" src={ img} alt={producto} /></Link> 
              <Link to="/# ">   <img className="imgDetail" src={img} alt={producto} /></Link> 
              <Link to="/# ">  <img className="imgDetail" src={img} alt={producto} /></Link> 
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
          
             <div className="contenedorTallas">
                 <p className="seleccionTalla">SELECCIONA TU TALLA</p>
                 <Select   
    options={options}
    onSelect={setTalle}     
    />

    <div>
        <p className="stockDisponible">Stock disponible {stockDestacados} </p>
    
        {stockDestacados === 0 && <p className="stockCantidad"> Item sin stock</p>  }
    
     
    </div>
            
             </div>
             <hr />
    
             </div>

 {
   stockDestacados > 0 &&
   <>
   


   {
    !isInCart(productDetail.id)
    ?      
    <Cart 
    stock={stock} 
    onAdd={agregarAlcarrito} 
    addToCart = {contador} 
    setContador= {setContador}/>
    : <Link to="/cart" className="compraProductos" >Terminar mi compra</Link>
    
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
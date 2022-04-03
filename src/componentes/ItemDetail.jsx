import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Cart from "./ItemCount";
import Select from "./select/select";

const stock = 9;
const initial =1;

const options =[
    {value: 'rojo', text: 'Rojo'},
    {value: 'verde', text: 'Verde'},
    {value: 'blanco', text: 'Blanco'}

]

const ItemDetail = ({productDetail }) =>{

const [contador, setContador] = useState(0);
const [color, setColor]= useState('rojo')
const {img, producto, precio, imgDetail, descripcionDetail, sizeS } = productDetail


const onAdd =(contador) =>{

    const itemToAdd = {
        color,
        producto,
        precio,
        img
       
    }
console.log(contador,itemToAdd);

};
  
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
                 <div className="tallas">
                    <Link to={"#/"}><p className="talla">{sizeS} </p></Link> 
                    <Link to={"#/"}><p className="talla">{sizeS} </p></Link> 
                    <Link to={"#/"}><p className="talla">{sizeS} </p></Link> 
                 </div>
             </div>
             <hr />
             <Select 
    
             options={options}
             onSelect={setColor}
             
             
             />
             </div>

             <div className="contenedorConteoCart">
             <p className="parrafoCantidad">Selecciona cantidad </p>
    <div className="cartAdd" > <Cart stock={stock} initial={initial} onAdd={onAdd} contador={contador} setContador= {setContador} /> </div>
 </div>
          
            </div>
        </div>
    )
}
export default ItemDetail;
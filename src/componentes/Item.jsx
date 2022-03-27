import React from "react";
import Cart from "./ItemCount";

const stock = 10;
const initial =1;
const onAdd =(contador) =>{
    console.log('click', contador);
};

 const Item = ({producto}) => {
return (
<div className="contenedorCardInf">
<div className="infContenedor">
    <div className="imgCard">
<img src={producto.img} className="imgProd" alt="producto.producto" />  
</div>
<hr></hr>
<div className="contendorNombre">
    <h3 className="tituloProducto">  {producto.producto}  </h3>
    <p className="precio">  {producto.precio} </p>
</div>  
<div className="contenedorParrafoCard">
<p className="parrafoCard"> {producto.descripcion} </p>
</div>
<div className="contenedorConteo">
    <div className="cartC" href={"#/"}>  <span> <Cart stock={stock} initial={initial} onAdd={onAdd} /> </span></div>
 </div>
</div>

    <div className="contenedorBtn">
 <button  className="btnCatalogo">{producto.btn} </button>
    </div>
</div>

);
};
export default Item;
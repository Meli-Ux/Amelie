
import React  from "react";
import Item from "./Item";

const itemList = ({listaProductos})=>{
    return(
        <div className="contenedorItemList">
           
            {listaProductos.map((producto)=><Item producto={producto} key= {producto.id} />)}
         
        </div>
    )

}
export default itemList;
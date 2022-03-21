
import React  from "react";
import { Item } from "./Item";
import prod01 from '../imagenes/hippieNegroCorto.png';

const ItemCard = [

{   id: 1,
    img: prod01,
    producto:'Vestido estampado ',
    precio: '5400 ARG',
    descripcion:'Vestido corte cuello redondo estampado hindu',
    btn:'Ver más'
   
},

{   id: 2,
    img: prod01,
    producto:'Vestido estampado ',
    precio: '5400 ARG',
    descripcion:'Vestido corte cuello redondo estampado hindu',
    btn:'Ver más'
   
},


{   id: 3,
    img: prod01,
    producto:'Vestido estampado ',
    precio: '5400 ARG',
    descripcion:'Vestido corte cuello redondo estampado hindu',
    btn:'Ver más'
  
},
{   id: 4,
    img: prod01,
    producto:'Vestido',
    precio: '5400 ARG',
    descripcion:'Vestido corte cuello redondo estampado hindu',
    btn:'Ver más'

},
{   id: 5,
    img: prod01,
    producto:'Vestido estampado ',
    precio: '5400 ARG',
    descripcion:'Vestido corte cuello redondo estampado hindu',
    btn:'Ver más'
    
},
{   id: 6,
    img: prod01,
    producto:'Vestido',
    precio: '5400 ARG',
    descripcion:'Vestido corte cuello redondo estampado hindu',
    btn:'Ver más'

},

];

const promesaCard = new Promise((resolve , reject)=>{
 setTimeout(() =>{

    const Items   = ItemCard;
   resolve ( Items );
    
  },2000 )


});

promesaCard.then((param) =>{
    console.log(param);
})


export const ItemInf = () =>{
    return (
        <div className="contenedorInfoCard">
            {
              ItemCard.map ((item )=> (
              
              <Item producto={item.producto} precio = {item.precio} descripcion = {item.descripcion} img ={item.img} btn = {item.btn}  />

              ))}
        </div>
    )
};


export default ItemInf;
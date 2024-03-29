import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import {  pantalones, camisas, vestidos, filtro } from './strings';
import { Link } from 'react-router-dom';
import ItemList  from './ItemList';
import { collection, getDocs, query, where} from 'firebase/firestore';
import { db } from '../firebase/config';




const ItemListColeccion = () => {

  const[listaProductos, setListaProductos] = useState([])
  const [cargando,setCargando] = useState(false)

  const {categoryId} = useParams()
  

    useEffect(()=>{
      setCargando(true)
     const productosRef = collection(db, "productos")
 const q = categoryId ? query(productosRef,where('category','==',categoryId)) : productosRef

     getDocs(q)
       .then(resp => {
         const items = resp.docs.map((doc)=> ({id: doc.id,...doc.data ()}))
         console.log(items)
         setListaProductos(items)
       })
       .finally(()=>{
         setCargando(false)
       })


    },[categoryId])

  
  return (

    <div className='itemColeccion'>
      <div className='contenedorColeccion'>
        <h1 className='coleccionTitulo'>COLECCIÓN 2022</h1>
      </div>
<div className='destacadosSelect'>
    <li className="destacados-item dropdown">
          <Link  className   ="nav-link dropdown-toggle" to="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <span>{filtro}</span> 
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/category/vestido">  <span>{vestidos}</span> </Link></li>
            <li><Link className="dropdown-item" to="/category/camisas">  <span>{camisas}</span> </Link></li>
            <li className="dropdown-divider"></li>
            <li><Link className="dropdown-item" to="/category/pantalones">  <span>{pantalones}</span> </Link></li>
          </ul>
        </li>
</div>

      <div className='contenedorItemListas'>   
      {
        
      cargando
       ? <p className='Cargando'>cargando</p> 
      : <ItemList listaProductos= {listaProductos} />
      
      }   
        </div>
    </div>
   
  );


};

export default ItemListColeccion ;

import React, {useEffect, useState} from 'react';
import ItemList  from './ItemList';
import { getProducts } from './mocks/FakeApi';


const ItemListColeccion = ({ temporada,  descripcion }) => {

  const[listaProductos, setListaProductos] = useState([])
  const [cargando,setCargando] = useState(false)


    useEffect(()=>{
      setCargando(true)
      getProducts
      .then((res)=> setListaProductos(res) )
      .catch((error)=> console.log(error))
      .finally(()=> setCargando(false))

    },[])



  
  return (
    <div className='itemColeccion'>

      <div className='tituloColeccion'>
      <h2>Colección</h2>
      <h2 className='tituloTercero'>{temporada} </h2>
      <p>{descripcion}</p>
      </div>
      <div className='contenedorItemListas'>   
      {cargando ? <p className='Cargando'>cargando</p> : <ItemList listaProductos= {listaProductos} />}   
        </div>
    </div>
   
  );


};

export default ItemListColeccion ;

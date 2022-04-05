import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

import ItemList  from './ItemList';
import { getProducts } from './mocks/FakeApi';


const ItemListColeccion = () => {


  const[listaProductos, setListaProductos] = useState([])
  const [cargando,setCargando] = useState(false)

  const {categoryId} = useParams()
  

    useEffect(()=>{
      setCargando(true)
      getProducts
      .then((res) => {
        if(categoryId){
          setListaProductos(res.filter((prod)=> prod.category ===  categoryId))
        }else {
          setListaProductos(res)
        }
      })

      .catch((error)=> console.log(error))
      .finally(()=> setCargando(false))

    },[categoryId])

  
  return (
    <div className='itemColeccion'>

      <div className='contenedorItemListas'>   
      {cargando ? <p className='Cargando'>cargando</p> : <ItemList listaProductos= {listaProductos} />}   
        </div>
    </div>
   
  );


};

export default ItemListColeccion ;

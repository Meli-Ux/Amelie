import React, {useEffect, useState} from 'react';
import prod01 from '../imagenes/hippieNegroCorto.png';
import ItemList  from './ItemList';

const ItemListColeccion = ({ temporada,  descripcion,indumentaria }) => {

  const[listaProductos, setListaProductos] = useState([])
  const [cargando,setCargando] = useState(false)

  const productos = [
    {   id: '1',
        img: prod01,
        producto:'Vestido estampado ',
        precio: '5400 ARG',
        descripcion:'Vestido corte cuello redondo estampado hindu',
        btn:'Ver más'
       
    },
    
    {   id: '2',
        img: prod01,
        producto:'Vestido estampado ',
        precio: '5400 ARG',
        descripcion:'Vestido corte cuello redondo estampado hindu',
        btn:'Ver más'
       
    },
    
    
    {   id: '3',
        img: prod01,
        producto:'Vestido estampado ',
        precio: '5400 ARG',
        descripcion:'Vestido corte cuello redondo estampado hindu',
        btn:'Ver más'
      
    },
    {   id: '4',
        img: prod01,
        producto:'Vestido',
        precio: '5400 ARG',
        descripcion:'Vestido corte cuello redondo estampado hindu',
        btn:'Ver más'
    
    },
    {   id: '5',
        img: prod01,
        producto:'Vestido estampado ',
        precio: '5400 ARG',
        descripcion:'Vestido corte cuello redondo estampado hindu',
        btn:'Ver más'
        
    },
    {   id: '6',
        img: prod01,
        producto:'Vestido',
        precio: '5400 ARG',
        descripcion:'Vestido corte cuello redondo estampado hindu',
        btn:'Ver más'
    },
    
    ];

    const getProducts = new Promise((resolve, reject)=>{
      let condition = true
      if(condition){
        setTimeout(()=>{
          resolve(productos)
        },2000)
      }else{
        reject('Error de datos')
      }
    })
//console.log(getProducts)
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
      <div className='contenedorItemList'>   
      {cargando ? <p className='Cargando'>cargando</p> : <ItemList listaProductos= {listaProductos} />}   
        </div>
    </div>
   
  );


};

export default ItemListColeccion ;

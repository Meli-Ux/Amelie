import React from 'react';
import ItemInf from './ItemList';



const ItemListColeccion = ({ temporada,  descripcion }) => {
  
  return (
    <div className='itemColeccion'>
      <div className='tituloColeccion'>
      <h2>Colección</h2>
      <h2 className='tituloTercero'>{temporada} </h2>
      <p>{descripcion}</p>
</div>
      <div className="contenedorCard">
         <span> <ItemInf/> </span>
    

        </div>
        
    </div>
   
  );


};

export default ItemListColeccion ;

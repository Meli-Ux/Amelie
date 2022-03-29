import React from 'react';



const ItemPortada = ({ temporada,  descripcion }) => {

  
  return (
    <div className='itemColeccion'>

      <div className='tituloColeccion'>
      <h2>Colección</h2>
      <h2 className='tituloTercero'>{temporada} </h2>
      <p>{descripcion}</p>
      </div>

    </div>
   
  );


};

export default ItemPortada ;

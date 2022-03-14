import React from 'react';


const ItemListColeccion = ({ temporada,  descripcion }) => {
  return (
    <div>
      <h2>Lo más visto</h2>
      <h2 className='tituloTercero'>{temporada} </h2>
      <p>{descripcion}</p>
   
    </div>
  );
};

export default ItemListColeccion ;

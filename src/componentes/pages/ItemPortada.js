import React from 'react';
import imgCentro from '../../imagenes/imgCentro.png'
import goeGris from '../../imagenes/goeGris.jpg'
import estampadoVazul from '../../imagenes/estampadoVazul.jpg'
import EstampadoNegro from '../../imagenes/EstampadoNegro.jpg'

const ItemPortada = ({ temporada,  descripcion, moda }) => {
 
  return (
    <div className='itemColeccionPortada'>
      <div id="carouselExampleCaptions" class="carousel slide carousel-dark" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions " data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2 "></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img  src={imgCentro} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <div>
        <h1>{temporada}</h1>
        <p>{descripcion}</p>
      <img src={goeGris} class="imgCarrousel " alt="..."/>
      <img src={estampadoVazul} class="imgCarrousel " alt="..."/>
      <img src={EstampadoNegro} class="imgCarrousel " alt="..."/>
      </div>
       <button className='btnCarrousel'>vermas</button>
      </div>
    </div>
    <div class="carousel-item">
      <img src={imgCentro}class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <div>
        <h1>{moda}</h1>
        <p>{descripcion}</p>
      <img src={goeGris} class="imgCarrousel " alt="..."/>
      <img src={goeGris} class="imgCarrousel " alt="..."/>
      <img src={goeGris} class="imgCarrousel " alt="..."/>
      </div>
       <button className='btnCarrousel'>vermas</button>
      </div>
    </div>
    <div class="carousel-item">
      <img src={imgCentro} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <div>
        <h1>{temporada}</h1>
        <p>S{descripcion}</p>
      <img src={goeGris} class="imgCarrousel " alt="..."/>
      <img src={goeGris} class="imgCarrousel " alt="..."/>
      <img src={goeGris} class="imgCarrousel " alt="..."/>
      </div>
       <button className='btnCarrousel'>vermas</button>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon  " aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon " aria-hidden="true"></span>
    <span class="visually-hidden ">Next</span>
  </button>
</div>

    </div>
    
   
  );


};

export default ItemPortada ;

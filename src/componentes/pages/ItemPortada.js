import React from 'react';
import imgCentro from '../../imagenes/imgCentro.png'
import imgCentro02 from '../../imagenes/imgCentro02.png'
import goeGris from '../../imagenes/goeGris.jpg'
import estampadoVazul from '../../imagenes/estampadoVazul.jpg'
import EstampadoNegro from '../../imagenes/EstampadoNegro.jpg'
import { Link } from 'react-router-dom';
const ItemPortada = ({ temporada,  descripcion, moda, tendencia }) => {
 
  return (
    <div className='itemColeccionPortada'>
      <div id="carouselExampleCaptions" class="carousel slide carousel-ligth" data-bs-ride="carousel">
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
        <h1 className='tituloPortada' >{temporada}</h1>
        <p className='parrafoPortada' >{descripcion}</p>
      <img src={goeGris} class="imgCarrousel " alt="..."/>
      <img src={estampadoVazul} class="imgCarrousel " alt="..."/>
      <img src={EstampadoNegro} class="imgCarrousel " alt="..."/>
      </div>
       <Link to="/category/vestido"className='btnCarrousel'>ver más</Link>
      </div>
    </div>
    <div class="carousel-item">
      <img src={imgCentro02}class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <div>
        <h2 className='tituloPortada' >{moda}</h2>
        <p className='parrafoPortada'  >{descripcion}</p>
      <img src={goeGris} class="imgCarrousel " alt="..."/>
      <img src={goeGris} class="imgCarrousel " alt="..."/>
      <img src={goeGris} class="imgCarrousel " alt="..."/>
      </div>
      <Link to="/category/pantalones"className='btnCarrousel'>ver más</Link>
      </div>
    </div>
    <div class="carousel-item">
      <img src={imgCentro} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <div>
        <h2 className='tituloPortada' >{tendencia}</h2>
        <p className='parrafoPortada'   >S{descripcion}</p>
      <img src={goeGris} class="imgCarrousel " alt="..."/>
      <img src={goeGris} class="imgCarrousel " alt="..."/>
      <img src={goeGris} class="imgCarrousel " alt="..."/>
      </div>
      <Link to="/category/camisas"className='btnCarrousel'>ver más</Link>
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

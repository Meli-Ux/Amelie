
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../imagenes/logoAmelie.png';
import { instagram, facebook,pinterest } from '../strings';
const Footer = () =>{
    return <div>
     <footer class="footer">
     <div className = "footerLogo">    
     <Link  to="/"> <img src={logo} className="App-logo" alt="logo" /></Link> 
    </div>
    <div className='redesFooter'>
    <Link className="nav-link active" aria-current="page" to="/"> <span>{instagram}</span></Link>
    <Link className="nav-link active" aria-current="page" to="/"> <span>{facebook}</span></Link>
    <Link className="nav-link active" aria-current="page" to="/"> <span>{pinterest}</span></Link>
    </div>
    <div className='politicaFooter'>
    <p className='parrafoFooter'>Todos los derehcos reservados</p>
   
    </div>

</footer>
    </div>
}

export default Footer
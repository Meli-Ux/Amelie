import React from 'react';
import { home, pantalones, camisas, vestidos, destacado, colección } from './strings.js';
import CartWidget from './CartWidget';

const NavBar = () => {
    return <div>
    <div className = "NavLogo">    
       <a href="#" className="logoApp" >AMELIE</a>
  
    </div>
          
<nav className="navbar navbar-expand-lg  bg-light">
  <div className="container-fluid"> 
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"/>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"> <span>{home}</span></a>
        </li>
        <li className="nav-itemTwo">
          <a className="nav-link" href="#"> <span>{destacado}</span> </a>
        </li>
  
        <li className="nav-item dropdown">
          <a  className   ="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <span>{colección}</span> 
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">  <span>{vestidos}</span> </a></li>
            <li><a className="dropdown-item" href="#">  <span>{camisas}</span> </a></li>
            <li className="dropdown-divider"></li>
            <li><a className="dropdown-item" href="#">  <span>{pantalones}</span> </a></li>
          </ul>
        </li>
      
      </ul>

      <form className="d-flex">  
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>

        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>

    
          <a className="nav-link" href="#"> <span> <CartWidget/> </span> </a>
     
   
    
    </div>

  </div>



</nav>


    </div>;
  };
  export default NavBar;
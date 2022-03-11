import React from 'react';
import { home, pantalones, camisas, vestidos, destacado, colección } from './strings.js';

const NavBar = () => {
    return <div>
    <div className = "NavLogo">    
       <a href="#" className="logoApp" >AMELIE</a>
    </div>
          
<nav class="navbar navbar-expand-lg  bg-light">
  <div class="container-fluid"> 
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"/>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"> <span>{home}</span></a>
        </li>
        <li class="nav-itemTwo">
          <a class="nav-link" href="#"> <span>{destacado}</span> </a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <span>{colección}</span> 
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">  <span>{vestidos}</span> </a></li>
            <li><a class="dropdown-item" href="#">  <span>{camisas}</span> </a></li>
            <li class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">  <span>{pantalones}</span> </a></li>
          </ul>
        </li>
      
      </ul>

      <form class="d-flex">  
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>

        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>


    </div>;
  };
  export default NavBar;
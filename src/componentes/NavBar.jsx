import React from 'react';
import { Link } from 'react-router-dom';
import { home, pantalones, camisas, vestidos, destacado, colección } from './strings.js';
import CartWidget from './CartWidget';
import logo from '../imagenes/logoAmelie.png';


const NavBar = () => {
    return <div>
    <div className = "NavLogo">    
  
     <Link  to="/"> <img src={logo} className="App-logo" alt="logo" /></Link> 

    </div>
          
<nav className="navbar navbar-expand-lg  bg-light">
  <div className="container-fluid"> 
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"/>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/"> <span>{home}</span></Link>
        </li>
        <li className="nav-itemTwo">
          <Link className="nav-link" to="/destacados"> <span>{destacado}</span> </Link>
        </li>
  
        <li className="nav-item dropdown">
          <Link  className   ="nav-link dropdown-toggle" to="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <span>{colección}</span> 
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/#">  <span>{vestidos}</span> </Link></li>
            <li><Link className="dropdown-item" to="/#">  <span>{camisas}</span> </Link></li>
            <li className="dropdown-divider"></li>
            <li><Link className="dropdown-item" to="/#">  <span>{pantalones}</span> </Link></li>
          </ul>
        </li>
      
      </ul>

      <form className="d-flex">  
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>

        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>

      
      <li className="nav-Cart">
          <span> <CartWidget/> </span>
        </li>
    
    </div>

  </div>
</nav>

    </div>;
  };
  export default NavBar;
import react from 'react';

import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className = "NavLogo">
      
       <a href="#" className="logoApp" >AMELIE</a>
   
          </div>
          
  <nav class="navbar navbar-expand-lg  bg-light">
  <div class="container-fluid">
   
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        <li class="nav-itemTwo">
          <a class="nav-link" href="#">Lo más visto</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Indumentaria
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Vestidos</a></li>
            <li><a class="dropdown-item" href="#">Camisas</a></li>
            <li class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Pantalone</a></li>
          </ul>
        </li>
      
      </ul>


      <form class="d-flex">
    
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>

        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
  
  <cartWidget/>
</nav>
      


      </header>
    </div>
  );
}

export default App;

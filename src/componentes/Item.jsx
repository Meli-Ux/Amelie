

import { Link } from 'react-router-dom';

const Item = ({producto}) => {

return (


<div className="contenedorCardInf">

<img src={producto.img} className="card-img" alt={producto.img}/>  

<hr></hr>
<div className="contendorCard">
    <h3 className="tituloProducto">  {producto.producto}  </h3>
    <p className="precio">  {producto.precio} </p>
<p className="parrafoCard"> {producto.descripcion} </p>
<Link to={`/detail/${producto.id}`} > <button  className="btnCatalogo">{producto.btn} </button></Link>
</div>

</div>

);
};
export default Item;

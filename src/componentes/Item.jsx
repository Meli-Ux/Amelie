

import { Link } from 'react-router-dom';



 const Item = ({producto}) => {

return (

<div className="contenedorCardInf">
<div className="infContenedor">
    <div className="imgCard">
<img src={producto.img} className="imgProd" alt="producto.producto" />  
</div>
<hr></hr>
<div className="contendorNombre">
    <h3 className="tituloProducto">  {producto.producto}  </h3>
    <p className="precio">  {producto.precio} </p>
</div>  
<div className="contenedorParrafoCard">
<p className="parrafoCard"> {producto.descripcion} </p>
</div>

</div>

    <div className="contenedorBtn">
<Link to={`/detail/${producto.id}`} > <button  className="btnCatalogo">{producto.btn} </button></Link>
    </div>
</div>

);
};
export default Item;

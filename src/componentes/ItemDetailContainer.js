import React, { useEffect, useState } from "react";
import { getProducts } from "../componentes/mocks/FakeApi";
import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () =>{
const [productDetail, setProductDetail] = useState({})
const [cargando, setCargando] = useState(false)

const {itemId} = useParams()

    useEffect(()=>{
      setCargando(true)
        getProducts
        .then((res) => setProductDetail(res.find((item) => item.id === itemId)))
        .catch((error) => console.log(error))
        .finally(() => setCargando(false))

    }, [])
   

    return(
        <div>
            { cargando ? <p>cargando</p> : <ItemDetail productDetail={productDetail} /> }
  
        </div>
    )
}

export default ItemDetailContainer;
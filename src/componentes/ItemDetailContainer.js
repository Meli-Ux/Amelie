import React, { useEffect, useState } from "react";
import { getProducts } from "../componentes/mocks/FakeApi";
import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router-dom';
import { db } from "../firebase/config";
import {doc, getDoc} from "firebase/firestore"

const ItemDetailContainer = () =>{
const [productDetail, setProductDetail] = useState({})
const [cargando, setCargando] = useState(false)

const {itemId} = useParams()

    useEffect(()=>{
      setCargando(true)
      const docRef = doc(db, "productos",itemId)
      getDoc(docRef)
      .then(doc => { 
          setProductDetail({id: doc.id, ...doc.data()})
      })

      .finally(()=>{
          setCargando(false)
      })

    }, [itemId])
   

    return(
        <div>
            { cargando ? <p>cargando</p> : <ItemDetail productDetail={productDetail} /> }
  
        </div>
    )
}

export default ItemDetailContainer;
import { useContext, useState } from "react"
import { db } from "../../firebase/config"
import { Link } from 'react-router-dom';
import { collection,addDoc,Timestamp, doc, updateDoc, getDoc } from "firebase/firestore"
import { CartContext } from "../context/CartContext"
import { Navigate } from "react-router-dom"
import imgOrder from '../../imagenes/imgOrder.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Swal from 'sweetalert2'






const Checkout = () =>{

    const {cart, cartTotal, emptyCart} = useContext(CartContext)

    const [ orderId, setOrderId] = useState(null)

const [values, setValues]= useState({
    nombre : '',
    email: '',
    tel: '',
    
    
   
})


const handleInputChange = (e) =>{
    console.log(e.target.value)
    console.log(e.target.name)

    setValues({
     ...values,
     [e.target.name] : e.target.value
    })

}







const handleSubmit = (e) => {
    e.preventDefault()

    if (values.nombre ==='' || values.email === '' | values.tel === ''){
     Swal.fire({
  title: 'Error!',
  text: 'Complete todos los campos',
  icon: 'error',
  confirmButtonText: 'Continuar'
 
})


    } 


 else {

    const orden = {
        items:cart,
        total: cartTotal(),
        comprador:{
           ...values
        },
        fyh: Timestamp.fromDate (new Date())
    }

    const ordersRef = collection(db, 'orders')

    Swal.fire({
        title: 'Nuestro equipo esta gestionando su pedido',
        html: 'Espere un momento, ¡Muchas gracias!',
        timer: 3000,
        timerProgressBar: true,
        icon: 'loading',
       
      })


    cart.forEach((item)=>{
        const docRef = doc(db, 'productos', item.id)

      getDoc(docRef)
      .then((doc)=>{
          if (doc.data().stockDestacados >= item.contador){

     updateDoc(docRef,{
            stockDestacados: doc.data().stockDestacados - item.contador
          })
          }else {
              alert('no hay stock de este item')
          }
     
      })
    })

   addDoc(ordersRef, orden)
    .then((doc)=>{
     
       setOrderId(doc.id)
       emptyCart()
    })
}

}

if (orderId){
    return <div className="contenedorOrderId">
        <div className="orderId">
        <img src={imgOrder} className="imgOrder" alt="logo" />
        <h2 className="tituloOrderId">Su orden fue realizada con exito</h2>  
    <Link className="btnOrderId" to="/" > Ir a página principal</Link>
    </div>
    </div>
}  


if (cart.length === 0) {
    return <Navigate to="/"/> 
}


    return (
        <div className="checkOut">
            <h1 className="NameCheckOut">Checkout</h1>
            <hr/>
            <form onSubmit={handleSubmit}   className="formCheckOut">
                <div className="inputIcons">
                <h2 className="tituloInput">Ingresa tu nombre</h2>
                <input  
                className="form-controlName"
                type={'text'}
                placeholder='Tu nombre'
                value={values.nombre}
                name= 'nombre'
                onChange={handleInputChange}
    
                />
              
        
                 </div>

                 <h2 className="tituloInput">Ingresa tu email</h2>
                  <input
                className="form-controlName"
                type={'email'}
                placeholder= 'maria@'
                value={values.email}
                name='email'
                onChange={handleInputChange}
                />
                 <h2 className="tituloInput">Ingresa tu Teléfono</h2>
                <input
                className="form-controlName"
                type={'tel'}
                placeholder= '+54 11'
                value={values.tel}
                name='tel'
                onChange={handleInputChange}
                />
            
                <button className="btnCheckOut" type="submit">Enviar</button>

        
            </form>
        </div>

    )
}

export default Checkout
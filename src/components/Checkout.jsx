import React, { useState } from 'react';
import { useCartContext } from '../context/CartContext';
import firebase from 'firebase';
import 'firebase/firestore';
import { getFirestore } from "../service/getFirebase";;



const inatialState = {
    name: '',
    email: '',
    phone: ''
}

export const Checkout = () => {

    //inicializando el estado 
    const [buyer, setBuyer] = useState(inatialState)   
    const [mensaje,setMensaje] = useState("");

    //traer del context
    const {product , precioTotal, borrarListado} = useCartContext() 



    //manejo de los campos del formulario
    
    function handleChange(e) {        
        
        setBuyer(
            {
                ...buyer,
                [e.target.name]: e.target.value
            }
        )
    }
    

    function handleSubmit(){
        
        const newOrder={
            buyer: buyer,
            items: product,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: precioTotal()
        }
        console.log(newOrder)


        const db = getFirestore()
        const orders = db.collection('orders')

        //controlar si hay los productos que quiero agregar 
        orders.add(newOrder)
        .then(({id}) => {
            setMensaje(`Gracias por su compra, el código de su compra es: ${id}`);
        }).catch(err => {
            setMensaje(`Ha ocurrido un error, su orden no se ha generado`);
        })
        .finally(()=>{
            setBuyer(inatialState)
            borrarListado()
        })



    }
    
    

   
    return (
        <>
        


            <div className="container" data-aos='fade-up'>
            <h1 className="text-center fw-bolder">Checkout</h1>
            <div className="row">
                <div className="col-md-4 offset-md-4 mt-5">
                <form onSubmit={e=> e.preventDefault()}>
                        <div class="mb-3">
                            <label className="form-label fw-bold">Nombre:</label>
                            <input type="text" className="form-control" aria-describedby="nameHelp" id="name" name="name" onChange={handleChange}></input>
                        </div>
                        <div class="mb-3">
                            <label className="form-label fw-bold">Email:</label>
                            <input type="email" className="form-control" aria-describedby="emailHelp" id="email" name="email" onChange={handleChange}></input>
                        </div>
                        <div class="mb-3">
                            <label className="form-label fw-bold">Repetir Email:</label>
                            <input type="email" className="form-control" aria-describedby="emailHelp" id="email2" name="email2" onChange={handleChange}></input>
                        </div>
                        <div class="mb-3">
                            <label className="form-label fw-bold">Teléfono:</label>
                            <input type="text" className="form-control" id="phone" name="phone" onChange={handleChange}></input>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button type="submit" className="btn btn-light border border-dark" onClick={() => handleSubmit()}>Enviar</button>
                        </div>
                    </form>

                    <div >
                        {<label>Precio total de su compra: ${precioTotal()}</label> }
                    </div>

                    <p className="text-center mt-5 text-warning bg-dark">{mensaje}</p>
                </div>
            </div>
        </div>
        </>
    )
}





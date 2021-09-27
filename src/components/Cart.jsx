
import { useCartContext } from "../context/CartContext"
import { NavLink, useHistory } from "react-router-dom"

const Cart = () => {

    const {borrarListado, precioTotal, mostrarItemsCarrito} = useCartContext() 
    
    
    const history = useHistory();
    const handleHistory = () => {
        history.push("/products")
    }
    
    const handleCheckout = () =>{
        history.push('/checkout')
    }

    return (
        <div className='container'>
           
               
           {
                precioTotal() > 0 ? 
                    <div>
                        {mostrarItemsCarrito()}
                        <label className='card cardCart' style={{fontWeight:'bold'}}>Precio total de su compra: ${precioTotal()}</label>
                                    
                     <button onClick={borrarListado} className='borrarButton'>Borrar carrito</button>
                     <br />
                     <button onClick={handleHistory} className='borrarButton' >Seguir comprando</button>
                     <br />
                     <button onClick={handleCheckout} className='borrarButton' >Finalizar compra</button>
                     
                    </div>
       
               :
               <div>
                   <h1>Su carrito está vacío</h1>
                   <button onClick={handleHistory} className='borrarButton' >Ir de compras</button> 
               </div>
               
            }

        </div>

    )
}

export default Cart

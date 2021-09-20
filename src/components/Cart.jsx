
import { useCartContext } from "../context/CartContext"

const Cart = () => {

    const {product , borrarListado, precioTotal, deleteFromCart} = useCartContext() 

    

    return (
        <div className='container'>
           
           {product.map(pro =><div className='card cardCart' style={{borderRadius: '16px'}}>

               <button onClick={() => deleteFromCart(pro.item.id)} className='deleteItemCart'>X</button>
               <img src={pro.item.image} alt="" className='cartImg' /> 
               <p className='cartTitle'>{ pro.item.title}</p>
               <p className='cartQuantity'>Cantidad: { pro.quantity}</p>
               </div>
               )}
               <div className='card' style={{width:'50%', display:"block", margin:'0 auto',borderRadius: '16px', fontWeight:'bold'}}>
                   <p>Precio total de su compra:</p>
                <label >${precioTotal()}</label>
               </div>
           <button onClick={borrarListado} className='borrarButton'>Borrar listado Cart</button>
        </div>
    )
}

export default Cart

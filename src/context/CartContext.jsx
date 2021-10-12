import {useState, createContext, useContext} from 'react'


const CartContext = createContext()


export const useCartContext = () => useContext(CartContext)



function CartContextProvider({children}) {

    const [product, setProducts] = useState([]);
   
    const addProduct = (item, quantity) => {

      const index = product.findIndex(i => i.item.title === item.title)//

        if (index > -1) {
          const oldQy = product[index].quantity

          product.splice(index, 1)
          setProducts([...product, { item, quantity: quantity + oldQy}])
        }
        else {
          setProducts([...product, {item, quantity}])
        }
    }


    const deleteFromCart = (id) => {  
      let newCart = product.filter(x => x.item.id !== id);

      setProducts(newCart);

    };   
    

    const iconCart = () => {
      return product.reduce( (acum, valor)=> acum + valor.quantity, 0) 

    }

    const borrarListado=()=>{
        setProducts([])
    }       

    

    const precioTotal =()=>{
      return product.reduce((acum, valor)=>(acum + (valor.quantity * valor.item.price)), 0) 
    }

   const mostrarItemsCarrito = () => {
   return product.map(pro =><div className='fade-up' style={{borderRadius: '16px'}}>
      <div className="d-flex justify-content-center my-5">
        <div className="card animate__bounceIn" style={{width: '30rem',padding:'10px'}}>
          <button onClick={() => deleteFromCart(pro.item.id)} className='deleteItemCart'>X</button>
          <img src={pro.item.imageUrl} alt="" className='cartImg' /> 
          <div className="card-body">
          <p className='cartTitle'>{ pro.item.title}</p>
          <p className='cartQuantity'>Cantidad: { pro.quantity}</p> 
          </div>
      </div>
    </div>
    </div>)

   }

   
   
    console.log(product)

    return (
        <CartContext.Provider value={{
            product,
            addProduct,
            iconCart,
            borrarListado,
            precioTotal,
            deleteFromCart,
            mostrarItemsCarrito
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider

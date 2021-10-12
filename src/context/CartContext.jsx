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


/*            <div data-aos='fade-up'>
            <div className="d-flex justify-content-center my-5">
            <div className="card animate__bounceIn" style={{width: '30rem',padding:'10px'}}>
            <button onClick={handleHistory} type="button" name="button" className="volver-detail"><FontAwesomeIcon icon={faArrowLeft} /></button>
                <img src={item.imageUrl} alt={item.description} className="card-img-top border border-dark rounded "/>
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Precio: ${item.price}</li>
                    <li className="list-group-item"><ItemCount initial={1} stock={5} onAdd={onAdd} /></li>

                </ul>
                </div>
                </div>
                </div> */
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

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


    const deleteFromCart = (itemId) => {  
      const deleteProduct = product.filter((element) => element.item.id !== itemId);

      return setProducts(deleteProduct);
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

   

   
   
    console.log(product)

    return (
        <CartContext.Provider value={{
            product,
            addProduct,
            iconCart,
            borrarListado,
            precioTotal,
            deleteFromCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider

import { createContext, useState } from "react";

export const CartContext = createContext();


export const ContextProvider = ({children}) => {


const [cart, setCart] = useState([]);

const addItem = (item, quantity) => {
    setCart([...cart, {item, quantity}])
}

console.log(cart)

    return(
        <CartContext.Provider value={addItem}>
            {children}
        </CartContext.Provider>
    )
}
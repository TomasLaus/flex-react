import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';
import {useHistory, useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";


const ItemCount = ({item=[]}) => {

    const InputCount= ()=> {
        
        return <button onClick={handleDescription} className='botonFinalizar'> Finalizar compra</button>
    }
    const ButtonCount= ()=> {
        return <button onClick={addItem} className='botonFinalizar'>Agregar al carrito</button>
    
    }
    const [inputType, setInputType] = useState('button') 


    const [count, setCount] = useState(0);

    const Count = inputType === 'button' ? ButtonCount : InputCount
    const stock = 12; 



    
    const history = useHistory();


    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        setCart([...cart, {item, quantity}])
    }

    
    const { id } = useParams();
    const handleDescription = id => history.push(`/cart/${id}`);
    
    if (count <= -1) {
        setCount(0)              
      } else if (count > stock) {
          setCount(stock)
      }





    
    return (
        <div style={{marginTop:'40%'}}>



            <button className='Botones' style= {{display: "none", margin:"1%",}} onClick={() => setCount(count + 1) }>
                    +
            </button>
            
            <Count />
            
            
            <button className='Botones' style= {{display: "none",margin:"1%"}} onClick={() => setCount(count - 1)}>
                    - 
            </button>
            <p className='pDetail' style= {{display: "none"}}>Usted tiene {count} unidad/es en el carrito</p>
            <p>Stock disponible: {stock - count}</p>
        </div>
    )
}


export default ItemCount

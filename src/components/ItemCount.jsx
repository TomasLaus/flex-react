import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';
import {useHistory } from "react-router-dom";


const ItemCount = () => {

    const InputCount= ()=> {
        
        return <button onClick={handleHistory} className='botonFinalizar'> Finalizar compra</button>
    }
    const ButtonCount= ()=> {
        return <button onClick={addToCart} className='botonFinalizar'>Agregar al carrito</button>
    
    }
    const [inputType, setInputType] = useState('button') 
    const [count, setCount] = useState(0);
    const Count = inputType === 'button' ? ButtonCount : InputCount
    const stock = 12; 

    const history = useHistory();
    const handleHistory = () => {
        if (count !== 0){
            setCount(0);
            history.push("/cart")
        } else{
            alert('No hay nada en el carrito')
        }
    }
    
    if (count <= -1) {
        setCount(0)              
      } else if (count > stock) {
          setCount(stock)
      }

    function addToCart(){
        setInputType('InputCount')
        var elems = document.getElementsByClassName('Botones');
        for (var i=0;i<elems.length;i+=1){
            elems[i].style.display = 'inline-block';
            setCount(count + 1);
        }
        var pDetail = document.getElementsByClassName('pDetail');
        for (var j=0;j<pDetail.length;j+=1){
            pDetail[j].style.display = 'inline-block';
        }
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

import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';
import { Button } from "react-bootstrap";

function ItemCount() {
    const [count, setCount] = useState(0);
    let stock = 5;
    



    if (count <= -1) {
      setCount(0)              
    } else if (count > stock) {
        setCount(stock)
    }

   const AgregarCarro = () => {
        var elems = document.getElementsByClassName('Botones');
        for (var i=0;i<elems.length;i+=1){
            elems[i].style.display = 'inline-block';
            setCount(count + 1);

        }
    }
    


    function Comprar ()  {
        if (count !== 0){
            setCount(0);
            alert('Compra exitosa'); 
        } else{
            alert('No hay nada en el carrito')
        }
        
    }
    

    return (
        <div>
            <div>
                <p style= {{}}>Usted tiene {count} unidad/es en el carrito</p>
                <Button className='Botones' style= {{display: "none", margin:"1%",}} onClick={() => setCount(count + 1)}>
                    +
                </Button>
                <Button variant="primary" style= {{display: 'inline-block', margin: '0 auto'}} onClick={(AgregarCarro)}>Agregar al carrito</Button>
                <Button className='Botones' style= {{display: "none",margin:"1%"}} onClick={() => setCount(count - 1)}>
                    - 
                </Button>
                <Button type="submit" style= {{display: 'block', margin: '1% auto'}} onClick={(Comprar)}>Comprar</Button>
                <p>Stock disponible: {stock - count}</p>
            </div>
        </div>
    )
}

export default ItemCount

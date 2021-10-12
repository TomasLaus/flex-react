import {useState} from 'react'
import { Link } from 'react-router-dom'
import swal from 'sweetalert';



const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial)
    const [cambiarBoton, setCambiarBoton] = useState(false)

    const handlerAdd =()=>{
        setCount(count +1)        
    }

    const handlerRm =()=>{
        if(count > initial) setCount(count - 1)
    }   

    const handlerOnAdd=()=>{
        onAdd(count)
        setCount(initial)
        setCambiarBoton(true)
        swal("¡Producto agregado al carrito!", "Gracias por elegirnos", "success");

    }

    return (
        <div>

            { cambiarBoton && 
                <div>
                    <Link to='/cart'>
                        <button className="botonFinalizar">Terminar compra</button>
                    </Link>
                    <Link to='/products'>
                        <button className="botonFinalizar">Segir comprando</button>
                    </Link>
                </div>
            }   

            { !cambiarBoton &&    
             <div>
                <button className="Botones" onClick={handlerAdd}>+</button>
                 <button className="Botones" onClick={handlerOnAdd}>Agregar</button> 
                <button className="Botones" onClick={handlerRm}>-</button><br />
                <label style={{display:'block'}}>Cantidad: {count}</label>
             </div>}
        
        </div>           
    )
}


export default ItemCount

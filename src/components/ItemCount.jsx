import {useState} from 'react'
import { Link } from 'react-router-dom'
 


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
        window.confirm('¿Agregar este producto?')
    }

    return (
        <div className="">

            { cambiarBoton && 
                <div>
                    <Link to='/cart'>
                        <button className="botonFinalizar">Terminar compra</button>
                    </Link>
                    <Link to='/flex-react'>
                        <button className="botonFinalizar">Segir comprando</button>
                    </Link>
                </div>
            }   

            <button className="Botones" onClick={handlerAdd}>+</button>
            { !cambiarBoton && <button className="Botones" onClick={handlerOnAdd}>Agregar</button>}    
            <button className="Botones" onClick={handlerRm}>-</button><br />
            <label style={{display:'block'}}>Cantidad: {count}</label>
        
        </div>           
    )
}


export default ItemCount

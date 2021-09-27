import { useHistory } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import ItemCount from './ItemCount'
import { useCartContext } from "../context/CartContext"



function ItemDetail( { item, categorias } ) {
     
    const { addProduct } = useCartContext()
   
    const onAdd=(cant)=>{
        console.log(cant)  
        addProduct(item, cant)        
    }


    const history = useHistory();
    const handleHistory = () => {
        history.push("/flex-react")
    }


    return (
        <>
            
            <div data-aos='fade-up'>
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
                </div>
                    

        </>
    )
}

export default ItemDetail
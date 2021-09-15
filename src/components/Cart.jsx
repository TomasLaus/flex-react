import { useHistory, useParams } from "react-router";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import ItemDetail from "./ItemDetail";
import { useState } from "react";


 const Cart =({ item=[] }) => {
    


    
    const history = useHistory();
    const handleHistory = () => {
        history.push("/flex-react")
    }


    
    const { id } = useParams();
    const items = item.find(items => items.title === id);
    
    
    
    return (

        <div>
            
            <button onClick={handleHistory} type="button" name="button" className="volver-detail"><FontAwesomeIcon icon={faArrowLeft} /></button>
            <h3 className='tituloProductos'>Flex</h3>
                    <div className="container">
                        <div className="row">
                        <img src={item.image} className='img-detail' alt="" / >
                        <h1 className='price-detail'>${item.price}</h1>
                        <h1 className='name-detail' >{item.title}</h1>
                        <p className='desc-detail' >{item.description}</p>
                            {items && <ItemDetail item={item} />}
                        
                        </div>
                    </div>
        </div>
    )
}

export default Cart

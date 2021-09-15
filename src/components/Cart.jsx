import { useHistory, useParams } from "react-router";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import ItemDetail from "./ItemDetail";


 const Cart =({item}) => {
    
    
    
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
                            {items && <ItemDetail item={items} />}
                        
                        </div>
                    </div>
        </div>
    )
}

export default Cart

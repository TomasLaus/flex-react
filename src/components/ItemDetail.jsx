import {useHistory } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import ItemCount from './ItemCount'



const ItemDetail = ( { item }) => {
    const history = useHistory();
    const handleHistory = () => {
        history.push("/")
    }
    


    return (
        <div data-aos='fade-up' className="">
            <div className='card-ecommerce-detail'>
                <button onClick={handleHistory} type="button" name="button" className="volver-detail"><FontAwesomeIcon icon={faArrowLeft} /></button>
                <img src={item.image} className='img-detail' alt="" / >
                <h1 className='price-detail'>${item.price}</h1>
                <h1 className='name-detail' >{item.title}</h1>
                <p className='desc-detail' >{item.description}</p>
                
                <ItemCount/>
            </div>
        </div>
    )
}

export default ItemDetail
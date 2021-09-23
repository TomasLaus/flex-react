import { useHistory } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import ItemCount from './ItemCount'
import { useCartContext } from "../context/CartContext"



function ItemDetail( { item } ) {
     
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
                <div className='card-ecommerce-detailcol-12 col-md-6 col-lg-4 col-xl-3 mx-auto'>
                    <button onClick={handleHistory} type="button" name="button" className="volver-detail"><FontAwesomeIcon icon={faArrowLeft} /></button>
                    <img src={item.imageUrl} className='img-detail' alt="" / >
                    <h1 className='price-detail'>${item.price}</h1>
                    <h1 className='name-detail' >{item.title}</h1>
                    <p className='desc-detail' >{item.description}</p>
                    
                    <ItemCount initial={1} stock={5} onAdd={onAdd} />
                </div>
            </div>

        </>
    )
}

export default ItemDetail
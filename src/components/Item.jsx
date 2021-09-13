import "bootstrap/dist/css/bootstrap.min.css";
import {useHistory} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'


function Item({ item }) {
    
    const history = useHistory();
    const handleDescription = id => history.push(`/products/${id}`);






    return (
        <div data-aos='fade-up' className="col-12 col-md-6 col-lg-4 col-xl-3" style={{marginBottom:'1%'}}>
            <div className='card-ecommerce'>
                <img src={item.image} className='img' alt="" />
                <h1 className='name' >{item.title}</h1>
                <h1 className='price'>${item.price}</h1>
                <button className="boton-detail" type="button" onClick={() => handleDescription(item.title)} name="button"><FontAwesomeIcon icon={faShoppingCart} /></button>

                
            </div>
        </div>
    )
}




export default Item
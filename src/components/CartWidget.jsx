import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import "../App";
import { useCartContext } from "../context/CartContext"
import { NavLink } from 'react-router-dom'



function CartWidget ()  {

    const { iconCart } = useCartContext()

    return (
        <div className="CartWidget">
            <Container>
                <NavLink to={`/cart`} style={{textDecoration: 'none'}} className="text-secondary" >
                 <label style={{background:'#f2f2f2', borderRadius:'34px', fontSize:'10px', padding:'5px'}}>{ iconCart() } </label>   <FontAwesomeIcon icon={faShoppingCart} style= {{color: '#fff', display: 'inline-block',}}/>                       
                </NavLink>                
            </Container>
        </div>
    )
}

export default CartWidget;
import { Container, NavDropdown  } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import "../App";



function CartWidget ()  {
    return (
        <div className="CartWidget">
            <Container>
                <FontAwesomeIcon icon={faShoppingCart} style= {{color: '#fff', display: 'inline-block',}}/>
                <NavDropdown id="basic-nav-dropdown" style= {{display: 'inline-block',}}>
                    <NavDropdown.Item>Su carrito</NavDropdown.Item>
                    <NavDropdown.Item><br/></NavDropdown.Item>
                    <NavDropdown.Item><br/></NavDropdown.Item>
                    <NavDropdown.Item><br/></NavDropdown.Item>
                    <NavDropdown.Item><br/></NavDropdown.Item>
                    <NavDropdown.Item>Su carrito está vacio.</NavDropdown.Item>
                </NavDropdown>
            </Container>
        </div>
    )
}

export default CartWidget;
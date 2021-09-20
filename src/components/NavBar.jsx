import { Container, Nav, Navbar  } from "react-bootstrap";
import logo from '../logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import CartWidget from "./CartWidget";
import {Link} from 'react-router-dom'


function NavBar() {

    return (
        <div className="Navbar" >
        <Navbar expand="lg" variant="dark" bg="dark" fixed="top" >
        <Container >
          <Navbar.Brand href="#home">Flex
          <img
            src={logo}
            width="30"
            height="30"
            className=" align-top"
            alt=""/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Link to='/flex-react' className='nav-link'>Inicio</Link>
                  <Link to='/flex-react' className='nav-link'>Nosotros</Link>
              </Nav>
          </Navbar.Collapse>
          <CartWidget/>
          </Container>
        </Navbar>
        </div>
    )
}

export default NavBar

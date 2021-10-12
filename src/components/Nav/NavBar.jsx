import { Container, Nav, Navbar, NavDropdown  } from "react-bootstrap";
import logo from '../../logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import CartWidget from "./CartWidget";
import {Link} from 'react-router-dom'


function NavBar() {

    return (
        <div className="Navbar" >
        <Navbar expand="lg" variant="dark" bg="dark" fixed="top" >
        <Container >
          <Navbar.Brand as={Link} to='/flex-react'>Flex
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
                  <NavDropdown title="Productos" id="basic-nav-dropdown">
                    
                  <Link exact to={`/category/celulares`} className='dropdown-item'>
                        Celulares
                    </Link>

                    <Link exact to={`/category/notebooks`} className='dropdown-item'>
                        Notebooks
                    </Link>

                        <Link exact to={`/category/tablets`} className='dropdown-item'>
                        Tablets
                        </Link>

                        <Link exact to={`/products`} className='dropdown-item'>
                        Todos
                        </Link>

                </NavDropdown>
              </Nav>
          </Navbar.Collapse>
          <CartWidget/>
          </Container>
        </Navbar>
        </div>
    )
}

export default NavBar

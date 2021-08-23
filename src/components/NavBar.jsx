import { Container, Nav, Navbar, NavDropdown  } from "react-bootstrap";
import logo from '../logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";


function NavBar() {
    return (
        <div className="Navbar">
        <Navbar expand="lg" variant="dark" bg="dark" fixed="top">
        <Container>
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
                  <Nav.Link href="#home">Inicio</Nav.Link>
                  <Nav.Link href="#link">Nosotros</Nav.Link>
                  <NavDropdown title="Productos" id="basic-nav-dropdown">
                    <NavDropdown.Item>Marca</NavDropdown.Item>
                    <NavDropdown.Item>Otra marca</NavDropdown.Item>
                    <NavDropdown.Item>Otra marca</NavDropdown.Item>
                </NavDropdown>
              </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>
        </div>
    )
}

export default NavBar

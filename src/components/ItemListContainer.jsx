import React from 'react';
import logo from '../logo.svg';
import { Card, Button  } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function ItemListContainer() {
    return (
        <div>

            <h3>Flex - productos</h3>
                <Card style={{ width: '18rem', color:'#343038', display:'block', margin:'0 auto' }}>
                <Card.Img variant="top" src={logo} />
                <Card.Body>
                    <Card.Title>Producto ejemplo</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary" > <a href="#home" style={{color: '#343038', textDecoration:'none'}}>Hacer algo</a></Button>
                </Card.Body>
                </Card>
        <h1>Esta es mi aplicación. Laus</h1>
        </div>
    )
}

export default ItemListContainer

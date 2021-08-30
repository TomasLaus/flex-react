import React from 'react';
import logo from '../logo.svg';
import { Card  } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemCount from './ItemCount';

function ItemListContainer() {
    return (
        <div>

            <h3>Flex - productos</h3>
                <Card style={{ width: '18rem', color:'#343038', display:'block', margin:'0 auto' }}>
                <Card.Img variant="top" src={logo} />
                <Card.Body>
                    <Card.Title>Producto ejemplo</Card.Title>
                    <ItemCount/>
                </Card.Body>
                </Card>
        </div>
    )
}

export default ItemListContainer

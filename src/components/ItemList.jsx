import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Item from './Item';



const Cards = ({ productos }) => productos.map((item) => <Item key={item.id} item={item} />)



export default Cards

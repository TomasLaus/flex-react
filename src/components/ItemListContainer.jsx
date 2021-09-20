import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import Item from './Item';
import {Spinner} from "react-bootstrap";

function ItemListContainer() {


    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])

    const url = (`https://fakestoreapi.com/products/`)
    const [productos, setProductos] = useState([]);
    const [loading, setloading] = useState(true)
          const fetchApi = async ()=> {
          const response = await fetch(url);
          const responseJSON = await response.json();
          setloading(false)
          setProductos(responseJSON)
    }


  
  
      useEffect(() => {
        fetchApi();
      }, [])






    return (
        <>
                            <h3 className='tituloProductos'>Flex</h3>
                            <h3 className='tituloProductos'>PRODUCTOS</h3>
                            <div className="container">
                            <div className="row">
                    {loading ? 
                        <Spinner className='spinner' animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                        </Spinner>

                        :
                        productos.map( (item)=>{
                        return (
                            <Item key={item.id} item={item} />
                        )
                    })
                }
                             </div>
                        </div>
        </>
    )
}

export default ItemListContainer

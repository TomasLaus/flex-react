import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import Item from './Item';

function ItemListContainer() {


    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])

    const url = (`https://fakestoreapi.com/products/`)
    const [productos, setProductos] = useState([]);
          const fetchApi = async ()=> {
          const response = await fetch(url);
          const responseJSON = await response.json();
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
                    {!productos ? 
                        'Cargando...' :
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

import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from './ItemList';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'

function ItemListContainer() {

    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])

    const [productos, setProductos] = useState([]);
    const fetchApi = async ()=> {
        await axios.get('https://fakestoreapi.com/products/')
        .then(response =>{
            setProductos(response.data);
            console.log(response.data)
        }).catch(error => {
            console.log(error);
        })
    }

    
    useEffect(() => {
        fetchApi();
    }, [])


    return (
        <div>

            <h3 className='tituloProductos'>Flex - PRODUCTOS</h3>
            <div className='container'>
                <div className='row'>
                    {!productos ? (
                        '...cargando'
                    ) : (
                        <Cards productos={productos}/>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer

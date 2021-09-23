import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import Item from './Item';
import {Spinner} from "react-bootstrap";
import { getFirestore } from '../service/getFirebase';
import { useParams } from 'react-router';
import ItemList from './ItemList';

function ItemListContainer() {


    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])

    const [items, setItems] = useState([])
    const [loading, setloading] = useState(true)

    const { category } = useParams()



  
    useEffect(() => {       
        const db = getFirestore()
         const queryDB = db.collection('items')

        const conditionQuery = category ? 
                queryDB.where('categoryId', '==', category) 
            : 
                queryDB 
      
            conditionQuery.get()
            .then(data => {
                if(data.size===0){
                    console.log('no hay nada')
                }
                setItems( data.docs.map(item => ( { id: item.id, ...item.data() } ) ) )    
                setloading(false)            
            })  
        
    }, [category])







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
                        <ItemList items={items} /> 
                }
                             </div>
                        </div>
        </>
    )
}

export default ItemListContainer

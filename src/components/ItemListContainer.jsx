import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import {Spinner} from "react-bootstrap";
import { getFirestore } from '../service/getFirebase';
import { useParams } from 'react-router';
import ItemList from './ItemList';

function ItemListContainer() {


    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams();



  
    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = db.collection("items");
    
        if (categoryId) {
          const filter = itemsCollection.where("categoryId", "==", categoryId);
          const promFilter = filter.get();
    
          promFilter.then((snapshot) => {
            if (snapshot.size > 0) {
              setItems(
                snapshot.docs.map((doc) => {
                    setLoading(false)
                  return { id: doc.id, ...doc.data() };
                })
              );
            }
          });
        } else {
          const prom = itemsCollection.get();
          prom.then((snapshot) => {
            if (snapshot.size > 0) {
              setItems(
                snapshot.docs.map((doc) => {
                    setLoading(false)
                  return { id: doc.id, ...doc.data() };
                })
              );
            }
          });
        }
      }, [categoryId]);







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

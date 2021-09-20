import {useEffect, useState } from "react"
import Aos from 'aos';
import 'aos/dist/aos.css'
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import {Spinner} from "react-bootstrap";




const ItemDetailContainer = ({ item=[] })=>{
    const { id } = useParams();
    const items = item.find(items => items.title === id);
    console.log(items);


        useEffect(() => {
            Aos.init({duration: 2000})
        }, [])

        const [loading, setLoading] = useState(true);
  
        useEffect(() => {
    
          setTimeout(() => {
            setLoading(false);
          }, 3000);
        }, []);
    


    return (
        <>
                    <h3 className='tituloProductos'>Flex</h3>
                    <div className="container">
                        <div className="row">
                        {loading ? 

                        <Spinner className='spinner' animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                        </Spinner> 
                        
                        : 
                        items && <ItemDetail item={items} />}
                            
                        
                        </div>
                    </div>

            
        </>
    )
}

export default ItemDetailContainer
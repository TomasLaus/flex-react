import {useEffect } from "react"
import Aos from 'aos';
import 'aos/dist/aos.css'
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";




const ItemDetailContainer = ({ item=[] })=>{
    const { id } = useParams();
    const items = item.find(items => items.title === id);
    console.log(items);


        useEffect(() => {
            Aos.init({duration: 2000})
        }, [])




    return (
        <>
                    <h3 className='tituloProductos'>Flex</h3>
                    <div className="container">
                        <div className="row">
                            {items && <ItemDetail item={items} />}
                        
                        </div>
                    </div>

            
        </>
    )
}

export default ItemDetailContainer
import { useState, useEffect } from "react"
import axios from 'axios';
import Aos from 'aos';
import 'aos/dist/aos.css'
import ItemDetail from "./ItemDetail";




function ItemDetailContainer() {


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
        <>
                         {!productos ? 
                         'Cargando...' :
              productos.map( (item,index)=>{
              return <ItemDetail key={item.id} item={item}/>
        })
      }
            
        </>
    )
}

export default ItemDetailContainer
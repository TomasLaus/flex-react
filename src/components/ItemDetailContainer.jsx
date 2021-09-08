import { useState, useEffect } from "react"
import axios from 'axios';
import Aos from 'aos';
import 'aos/dist/aos.css'
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";




function ItemDetailContainer() {
        const {id} = useParams();
        useEffect(() =>{
            productos.find((p) => p.id === parseInt(id))
        })

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
                    <h3 className='tituloProductos'>Flex</h3>
                    <div className="container">
                    <div className="row">
                    {!productos ? 
                        'Cargando...' :
                        productos.map( (item)=>{
                        return (
                            <ItemDetail key={item.id} item={item}/>
                        )
                    })
                }
                             </div>
                        </div>
            
        </>
    )
}

export default ItemDetailContainer
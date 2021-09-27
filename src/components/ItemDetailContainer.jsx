import {useEffect, useState } from "react"
import 'aos/dist/aos.css'
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import {Spinner} from "react-bootstrap";
import { getFirestore } from "../service/getFirebase";



function ItemDetailContainer() {
    const [loading, setLoading] = useState(true)

    const { id } = useParams();
    const [ categorias, setCategorias ] = useState([])
    const [item, setItem] = useState({
        data:{}
    });

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection("items");
        const itemById = itemCollection.doc(id);

        itemById.get().then((querySnapshot) => {
            if(Object.keys(querySnapshot).length === 0){
                console.log("No results!");
            };
            setItem(querySnapshot.data());
            setLoading(false)
        }).catch((error) => {
            console.log("Error searching items", error);
        });
    }, [id]);

    
    
    useEffect(() => {
        const db = getFirestore()
        db.collection('categorias').get()
        .then(resp => {
            if(resp.size!==0){
                setCategorias( resp.docs.map(cat => ( {id: cat.id, ...cat.data()} )) )
                
            }
        } )
        .catch(err=>console.log(err))
        .finally(()=> setLoading(false))
       
    }, [])



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
                        <ItemDetail item={item} categorias={categorias}/>}
                            
                        
                        </div>
                    </div>

            
        </>
    )
}

export default ItemDetailContainer
import "bootstrap/dist/css/bootstrap.min.css";
import {Link, NavLink} from 'react-router-dom'


function Item({ item }) {
    const {id} = item;
    return (
        <div data-aos='fade-up' className="col-12 col-md-6 col-lg-4 col-xl-3" style={{marginBottom:'1%'}}>
            <div className='card-ecommerce'>
                <img src={item.image} className='img' alt="" />
                <h1 className='price'>${item.price}</h1>
                <h1 className='name' >{item.title}</h1>
                <NavLink to={`/products/${id}`}>
                <div className='contenedor-boton'>
                <button className='btn' type='button' name='button'>Ver más</button>
                </div>
                </NavLink>
            </div>
        </div>
    )
}




export default Item
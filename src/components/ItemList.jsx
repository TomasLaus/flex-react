import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";





const Cards = ({ item }) => {
      return (
      <div data-aos="fade-up" className="col-12 col-md-6 col-lg-4 col-xl-3" >
      <div className="card-ecommerce" >
          <h1 className='price'>${item.price}</h1>
          <h1 className='name' >{item.title}</h1>
          <div className='contenedor-boton'>
                <button className='btn' type='button' name='button'>Comprar</button>
             </div>
        </div>
      </div>
    )
}



export default Cards
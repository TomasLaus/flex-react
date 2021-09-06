import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Item from './Item';
import ItemDetail from './ItemDetail';




const Cards = ({ productos }) =>     {productos &&
    productos.map( (item,index)=>{
      return (
      <div data-aos="fade-up" className="col-12 col-md-6 col-lg-4 col-xl-3" key={index}>
      <div className="card">
          <h1 className="title-card-weather">{item.name}</h1>
          <p className="text">{item.image}</p>
          <h1 className="title-card-weather-of">{item.price}</h1>
          <div className="container-btns-card-weather">
          <i className="icon-heart-btn-card far fa-heart"></i>
          </div>
        </div>
      </div>)
    })
}



export default Cards

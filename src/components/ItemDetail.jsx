


function ItemDetail( {item }) {
    return (
        <div data-aos='fade-up' className="col-12 col-md-6 col-lg-4 col-xl-3" style={{marginBottom:'1%'}}>
            <div className='card-ecommerce'>
                <img src={item.image} className='img' alt="" />
                <h1 className='price'>${item.price}</h1>
                <h1 className='name' >{item.title}</h1>
                <h1 className='desc' >{item.description}</h1>
            </div>
        </div>
    )
}

export default ItemDetail
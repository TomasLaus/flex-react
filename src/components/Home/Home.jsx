import React from 'react'
import { useHistory } from 'react-router';

function Home() {
    const history = useHistory();
    const handleHistory = () => {
        history.push("/products")
    }
    return (
        <div >
            <div className="d-flex justify-content-center my-5 ">

            <div className=" card-image animate__bounceIn col-12 col-md-6 col-lg-4 col-xl-3" background='dark' style={{height: '37vh', width: '85%', borderRadius: '55px'}}>
                <p className="card-title card-title-overlay">Los mejores productos</p>
                <img className="card-img-overlayborder border-dark " src="https://i0.wp.com/hipertextual.com/wp-content/uploads/2021/05/ipad-air-scaled.jpg?resize=1200%2C743&ssl=1" alt="" style={{borderRadius: '55px', height: '100%', width: '100%' }}/>
                <button className="borrarButton" onClick={handleHistory}>Ver más</button>
            </div>
            </div>
        </div>
    )
}

export default Home

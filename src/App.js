import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { useState, useEffect } from "react";
import  CartContextProvider  from './context/CartContext';
import Cart from './components/Cart';

function App() {
      
  
  
  
  const url = (`https://fakestoreapi.com/products/`)
  const [productos, setProductos] = useState([]);
        const fetchApi = async ()=> {
        const response = await fetch(url);
        const responseJSON = await response.json();
        setProductos(responseJSON)
    }


    useEffect(() => {
      fetchApi();
    }, [])


  return (
    <div className="App">
      < CartContextProvider> 
          <BrowserRouter>
            <header className="App-header">
              <NavBar />
            </header>
            
            <body className="App-body">
              <Switch>

                <Route exact path='/flex-react' component={ItemListContainer} productos={productos}/>
                
                <Route exact path='/products/:id' >
                    <ItemDetailContainer item={productos}/>
                </Route>
                
                
                <Route exact path='/cart' component={Cart} />

              </Switch>
            </body>
          </BrowserRouter>
        </ CartContextProvider>
    </div>
  );
}

export default App;

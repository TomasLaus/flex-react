import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { useState, useEffect } from "react";

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
        <BrowserRouter>
          <header className="App-header">
            <NavBar />
          </header>
          
          <body className="App-body">
            <Switch>

              <Route exact path='/' component={ItemListContainer} productos={productos}/>
              
              <Route exact path='/products/:id' >
                  <ItemDetailContainer item={productos}/>
              </Route>

            </Switch>
          </body>
        </BrowserRouter>
    </div>
  );
}

export default App;

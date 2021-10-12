import './App.css';
import NavBar from './components/Nav/NavBar';
import ItemListContainer from './components/Item/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import {BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import  CartContextProvider  from './context/CartContext';
import Cart from './components/Nav/Cart';
import Home from './components/Home/Home';
import { Checkout } from './components/Form/Checkout';
import Page404 from './components/Home/404';

function App() {
      
  
  
  



  return (
    <div className="App">
      < CartContextProvider> 
          <BrowserRouter>
            <header className="App-header">
              <NavBar />
            </header>
            
            <body className="App-body">
              <Switch>

                <Route exact path='/flex-react' component={Home}/>
                <Route exact path='/products' component={ItemListContainer} />
                <Route path="/category/:categoryId" component={ItemListContainer}/>
                <Route exact path='/products/:id' >
                    <ItemDetailContainer />
                </Route>
                <Route exact path="/checkout" component ={Checkout} />
                
                
                <Route exact path='/cart' component={Cart} />
                
                <Route exact path="/404" component={Page404} />
                <Redirect to='/404' />


              </Switch>
            </body>
          </BrowserRouter>
        </ CartContextProvider>
    </div>
  );
}

export default App;

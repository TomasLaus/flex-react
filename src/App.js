import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

function App() {



  return (
    <div className="App">
        <BrowserRouter>
          <header className="App-header">
            <NavBar />
          </header>
          
          <body className="App-body">
            <Switch>

              <Route exact path='/' component={ItemListContainer}/>
              <Route exact path='/products/:id' component={ItemDetailContainer}/>

            </Switch>
          </body>
        </BrowserRouter>
    </div>
  );
}

export default App;

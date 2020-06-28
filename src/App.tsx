import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import './App.scss';
import Home from './pages/Home';
import Sobre from './pages/Sobre';


function App() {

  // let a1: A = { a: 'aaa', b: 'bbb', c: 'ccc' };

  // let { a, ...aProps } = a1;

  // let a2 = {
  //   // ...(aProps.b && { x: aProps.b })
  //   ...(aProps.b && { x: aProps.b })
  // };

  // a2.

  return (
    <div className="App">

      <header className="App-header">
        <h1>Teste React</h1>
        <p>
          Uma aplicação simples em React
        </p>
      </header>

      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/sobre">Sobre</Link>
            </li>
          </ul>

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/sobre">
              <Sobre />
            </Route>
          </Switch>
        </div>
      </Router>

    </div>
  );
}


export default App;

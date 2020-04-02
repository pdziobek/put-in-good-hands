import React, {Component}from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink, BrowserRouter,
} from 'react-router-dom';
//STYLE
import './style.scss';
//COMPONENTS
import Home from "./components/home/Home";
import Navbar from "./components/navigation/Navbar";
import Login from "./components/login/Login";
import Register from "./components/login/Register";

function App() {
  return (
      <BrowserRouter>
          <section className='container'>
              <Navbar/>

                  <Switch>
                      <Route exact path='/' component={Home} />
                      <Route exact path='/login' component={Login} />
                      <Route exact path='/register' component={Register} />
                  </Switch>
          </section>

      </BrowserRouter>
  );
}

export default App;

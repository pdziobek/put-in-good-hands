import React, {Component}from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink, BrowserRouter,
} from 'react-router-dom';
//COMPONENTS
import Home from "./components/home/Home";

function App() {
  return (
      <>
      <div>Hello World! I am always here above the routing</div>
          {/*<Navbar/>*/}
      <BrowserRouter>
          <Switch>
              <Route exact path='/' component={Home} />
          </Switch>

      </BrowserRouter>
      </>
  );
}

export default App;

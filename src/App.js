import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header/>
            <h1>Checkout</h1>
          </Route>
          <Route path="/login">
            <h1>login</h1>
          </Route>
          {/* last route is default route */}
          <Route path="/">
            <Header/>
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;

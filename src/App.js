import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from './components/Checkout';
import Login from './components/Login';
import {useStateValue} from "./utils/StateProvider";
import {auth} from './components/config/firebase'


function App() {

  const [{user}, dispatch] = useStateValue();

  // now i need code that runs based on a given condition = useEffect()
  useEffect(() => {



    const unsubscribe = auth.onAuthStateChanged((authUser) => {

      if(authUser){

        // the user is logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else {

        // the user is logged out

        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
    return () => {
      unsubscribe();
    }
  }, [])
  
  //checking for user 
  console.log("user is >>>>>", user)

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header/>
            <Checkout/>
          </Route>
          <Route path="/login">
            <Login/>
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

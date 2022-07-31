import React, { useEffect } from "react";
import './App.css';
// import Header from './Header';
// import Home from './Home'; HeaderAndHome replaceted this part of code
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import HeaderAndHome from './HeaderAndHome';
import HeaderAndCheckout from './HeaderAndCheckout';
import Login from './Login';
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);


  return (
    // BEM convention used
    <Router>
       <div className="App">
       <Routes>
           <Route path='/' element={ <HeaderAndHome /> } exact/>
           <Route path='/checkout' element={ <HeaderAndCheckout /> } exact/>
           <Route path='/login' element={ <Login /> } exact/>
         </Routes>
       </div>
    </Router>
    
  );
}

export default App;




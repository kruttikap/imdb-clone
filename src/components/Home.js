import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import { createStore } from 'redux';
import Login from './Login';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';



class Home extends Component {
    
    render() {

        const reducer = function(state, action){
            if(action.type === "Attack"){
                return action.payload
              }
              return state;
            }       
        

        const store = createStore(reducer, "peace");

        
        store.subscribe(() => {
                console.log("store is now", store.getState());
            })

            store.dispatch({type: "Attack", payload: "Iron man"})


        return (
            <div className="home">
                <h1>IMDb</h1>
                <Router>
                <Link to="/">Home</Link> <br />
                {/* <Link to="/movies">Movies</Link> <br />
                <Link to="/login">Sign in</Link> <br />
                <Link to="/watchlist">Watchlist</Link>
                <Login /> */}
                </Router> 
                </div>
        )
    }
}



export default Home;
                
                
                {/* <Router>  */}
                
                  {/* <switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/login"  component={Login} />
                  <Route path="/aboutus" component={AboutUs} />
                  <Route path="/contactus" component={ContactUs} />     
                  </switch>  */}
                {/* </Router> */}
           
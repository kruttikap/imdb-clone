import React from 'react';
import './App.css';
import Home from './components/Home'
import Login from './components/Login'
import Navbar from './components/navbar/Navbar'
import Watchlist from './components/watchlist/Watchlist'
import Movies from './components/Movies'
import Notfound from './Notfound'
import {Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">

      
      <Navbar />
      <Router>
      {/* <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/movies"><Movies /></Link></li>
          <li><Link to="/watchlist">Watchlist</Link></li>
          <li><Link to="/login">Sign in</Link></li>
        </ul>
        */}
      <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/movies" component={Movies} />
            <Route exact path="/watchlist" component={Watchlist} />
            {/* <Route exact path="/" component={} />
            <Route exact path="/" component={} /> */}
            <Route path="/login" component={Login} />
            <Route component={Notfound} />
        </Switch>
        </Router>
      
    </div>
    // </div>
  );
}

export default App;

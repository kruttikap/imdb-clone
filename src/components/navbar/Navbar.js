import React from "react";
import ReactDOM from "react-dom";
import {Route, Link, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';
import{withRouter} from 'react-router-dom';
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import Home from "../Home";
import Watchlist from '../watchlist/Watchlist'
import Movies from '../Movies'
import Login from "../Login"
import Notfound from "../Notfound"

const { Header} = Layout;

function Protected({component: Component, ...rest}) {
  // console.log("$$$$$$$$$", localStorage.getItem('isLoggedin'));
  return (
      <Route 
          {...rest}
          render={props => 
              localStorage.getItem('isLoggedin') === 'true'
              ? <Component {...props}/>
              : <Redirect to='/login'/>
          }
      />
  )
}

const Button = withRouter(({ history, handleLogout}) => (
  <button
    type='button'
    onClick={() => { 
        handleLogout(history)
      }}
  >
    Logout
  </button>
))


class Navbar extends React.Component {

  state = {
    name: 'abc',
    password: 'def',
    isLoggedIn: false
}

handleSubmit = (e) => {
    e.preventDefault();
    console.log('Loggedin')
    localStorage.setItem('isLoggedin', true);
    localStorage.setItem('name', this.state.name);
    localStorage.setItem('password', this.state.password);
    this.setState({
        isLoggedIn: true
    })
    console.log("Logged in..!")
}

handleLogout = (history) => {
    history.push('/login');
    localStorage.setItem('isLoggedin', false);
    this.setState({
        isLoggedIn: false
    })
    return <Redirect 
      to='/login'
  />
}

handleChange = (e) => {
    this.setState({
        name: e.target.value
    })
}

render() {
    return(
  <Layout>
    <Header isloggedIn={this.state.isLoggedIn} handleLogout={this.handleLogout}/>
      <Router>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '33px' }}
      >
      <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
      <Menu.Item key="2"><Link to="/movies">Movies</Link></Menu.Item>
      <Menu.Item key="3"><Link to="/watchlist">Watchlist</Link></Menu.Item>
      {
        this.props.isloggedIn
         ? <Menu.Item key="4"><Button handleLogout={this.props.handleLogout}/></Menu.Item>
         : <Menu.Item key="4"><Link to="/login">Sign In</Link></Menu.Item>
                    }
    </Menu>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/movies" component={Movies} />
          <Protected exact path="/watchlist" component={Watchlist} />
          <Route path="/login" render={props => <Login {...props} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />} />
          <Route component={Notfound} />
      </Switch>
      </Router>
</Layout>  
);}
    }

export default Navbar;

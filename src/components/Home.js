import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import { createStore } from 'redux';
import Login from './Login';
import Movies from './Movies';
import Trailers from "./Trailers"
import Anticipate from "./Anticipate"
import Gallery from "./Gallery"
import { Layout, Menu } from "antd";
const { Header, Content, Sider, Footer } = Layout;




class Home extends Component {
    
    render() {



        return (
            <div className="home">
                <h1>IMDb</h1>
                <Layout>
        <Content style={{
            background: '#fff',
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}>
          <Trailers/> <hr />
          <Gallery/>
        </Content>
          <Sider width={300} style={{ background: '#EAECEE' }}>
        <Anticipate/>
          </Sider>
        </Layout>
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
           
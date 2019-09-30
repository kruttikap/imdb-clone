import React from "react";
import ReactDOM from "react-dom";
import {Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom';
import "antd/dist/antd.css";
// import "./index.css";
import { Layout, Menu } from "antd";
import Home from "../Home";
import Watchlist from '../watchlist/Watchlist'
import Movies from '../Movies'
// import Login from "../Login"

const { Header, Content, Sider, Footer } = Layout;

class Navbar extends React.Component {

render() {
    return(
  <Layout>
    <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        style={{ lineHeight: "64px" }}
      >
          <Router>
        <Menu.Item><Link to="/">IMDb</Link></Menu.Item>
        <Menu.Item><Link to="/movies">Movies</Link></Menu.Item>
        <Menu.Item><Link to="/watchlist">Watchlist </Link></Menu.Item>
        <Menu.Item><Link to="/login">Sign in</Link></Menu.Item>
        </Router>
      </Menu>
    </Header>
    <Content style={{ padding: "0 50px", marginTop: 64 }}>
      <div style={{ background: "#fff", padding: 24, minHeight: 380 }}>
        Content
        <Sider> right sidebar </Sider>
        {/* <Home /> */}
      </div>
    </Content>
    <Footer style={{ textAlign: "center" }}>
    Copyright © 1990-2019 IMDb.com, Inc.

    </Footer>
  </Layout>
);}
    }

export default Navbar;

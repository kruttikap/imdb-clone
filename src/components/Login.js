import React, { Component } from 'react'
// import {SIGN_IN} from '../actions'

class Login extends Component {
  render() {
    console.log("Inside Login Component", this.props.handleSubmit)
    return(
        <form onSubmit={this.props.handleSubmit}>
            <input 
                type="text"
                placeholder="Enter UserName"
                value={this.props.name}
                onChange={this.props.handleChange}
            />
            <input 
                type="password"
                placeholder="Enter Password"
                value={this.props.password}
                onChange={this.props.handleChange}
            />
            <input type="submit" value="Login"/>
        </form>
    )
}
}

export default Login;
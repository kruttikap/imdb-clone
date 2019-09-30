import React, { Component } from 'react'

class Login extends Component {
    render() {
        return (
            <div className="login">
               <form>
        <label>
          Username:
          <input type="text" />
        </label>
        <br /> <br />
        password:
        <input type="text"  /> 
        <br /> <br />
        <button type="submit">Login</button>
      </form>
            </div>
        )
    }
}

export default Login;
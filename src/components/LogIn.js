import React, { Component } from 'react'
import {connect} from 'react-redux' 

class LogIn extends Component {
  
  state = {
    email: '',
    password: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    debugger
    e.preventDefault();
    console.log(this.state);
    this.state.email == this.props.loginDetails.username && this.state.password == this.props.loginDetails.password ? 
    this.props.history.push('/employeelist') : alert('Invalid Credentials')
  
}
  render() {
    console.log(this.props)
    return (
      
      <div className="container">
        <form className="white" onSubmit={(e) => this.handleSubmit(e)}>
          <h5 className="grey-text text-darken-3">Employee SignIn </h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id='email' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id='password' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn blue lighten-1 z-depth-0">Login</button>
          </div>
        </form>
      </div>
      
    )
  }
}

const mapStateToProps = (state) => {
  return {
      loginDetails : state.login
  }
}

export default connect(mapStateToProps)(LogIn)

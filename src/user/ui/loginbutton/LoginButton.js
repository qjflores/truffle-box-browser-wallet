import React, { Component } from 'react'

class LoginButton extends Component {
  constructor(props) {
    super(props)

    this.state = {
      web3: this.props.web3
    }
  }

  onLoginButtonClick(){
    this.props.onLoginUserClick(this.state.web3.web3)
  }

  render(){
    return(
      <li className="pure-menu-item">
        <a href="#" className="pure-menu-link" onClick={this.onLoginButtonClick.bind(this)}>Login</a>
      </li>
    )
  }
}

export default LoginButton

import React, { Component } from 'react'
import { Link } from 'react-router'
import { HiddenOnlyAuth, VisibleOnlyAuth } from './util/wrappers.js'

import Web3 from 'web3'
import getWeb3 from './util/getWeb3'

import truffleConfig from './../truffle-config.js'
var web3Location = `http://${truffleConfig.networks.development
  .host}:${truffleConfig.networks.development.port}`
  
// UI Components
import LoginButtonContainer from './user/ui/loginbutton/LoginButtonContainer'
import LogoutButtonContainer from './user/ui/logoutbutton/LogoutButtonContainer'

// Styles
import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.web3Initialize.bind(this)
  }

  componentWillMount() {
    console.log("App.componentWillMount")
    getWeb3.then(results => {
      console.log('getWeb3.then')
      console.log(results.web3)
      this.web3Initialize(results.web3)
      //dispatch(web3Init(results.web3))  
    })
  }

  web3Initialize(web3) {

    if (typeof web3 !== 'undefined') {
      // Use the Mist/wallet provider.
      // DEVELOPER NOTE: removing the next commented line will break the app
      // eslint-disable-next-line
      var web3Provided = new Web3(web3.currentProvider)
      this.props.setWeb3(web3Provided)
      // this.setState({web3:web3Provided})
    } else {
      // DEVELOPER NOTE: What happens in the wild if the
      // user does not have a browser based wallet? What happens
      // if the Web3 object cannot be initialized with the httpProvider
      // given from the loction in the truffle-config file?
      // dev haiku
      this.web3Provided = new Web3(
        new Web3.providers.HttpProvider(web3Location)
      )
    }
  }


  render() {
    const OnlyAuthLinks = VisibleOnlyAuth(() =>
      <span>
        <li className="pure-menu-item">
          <Link to="/dashboard" className="pure-menu-link">Dashboard</Link>
        </li>
        <li className="pure-menu-item">
          <Link to="/profile" className="pure-menu-link">Profile</Link>
        </li>
        <LogoutButtonContainer />
      </span>
    )

    const OnlyGuestLinks = HiddenOnlyAuth(() =>
      <span>
        <li className="pure-menu-item">
          <Link to="/signup" className="pure-menu-link">Sign Up</Link>
        </li>
        <LoginButtonContainer />
      </span>
    )

    return (
      <div className="App">
        <nav className="navbar pure-menu pure-menu-horizontal">
          <Link to="/" className="pure-menu-heading pure-menu-link">Truffle Box</Link>
          <ul className="pure-menu-list navbar-right">
            <OnlyGuestLinks />
            <OnlyAuthLinks />
          </ul>
        </nav>

        {this.props.children}
      </div>
    );
  }
}

export default App

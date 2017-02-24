import React, { Component } from 'react'


class Web3Init extends Component {

  componentDidMount(){
        this.props.onWeb3ComponentLoad()
  }
  render() {
    return(
    <li className="pure-menu-item">
    </li>
      )
  }
}

export default Web3Init

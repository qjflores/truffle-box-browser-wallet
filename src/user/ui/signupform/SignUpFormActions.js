import AuthenticationContract from '../../../../build/contracts/Authentication.json'
import { loginUser } from '../loginbutton/LoginButtonActions'
//import { browserHistory } from 'react-router'

const contract = require('truffle-contract')

export const USER_SIGNED_UP = 'USER_SIGNED_UP'
function userSignedUp(user) {
  return {
    type: USER_SIGNED_UP,
    payload: user
  }
}

export function signUpUser(name, web3) {
  return function(dispatch) {
    // Using truffle-contract we create the authentication object.
    const authentication = contract(AuthenticationContract)
    authentication.setProvider(web3.currentProvider)

    // Declaring this for later so we can chain functions on Authentication.
    var authenticationInstance

    // Get current ethereum wallet.
    var coinbase = web3.eth.coinbase;

    authentication.deployed().then(function(instance) {
      authenticationInstance = instance

      // Attempt to sign up user.
      authenticationInstance.signup(name, {from: coinbase})
      .catch(function(result) {
        // If error...
      })
      .then(function(result) {
        // If no error, login user.
        // DEVELOPER NOTE: calling dispatch with the userSignedUp action
        // will send an undefined action type to the reducer
        //dispatch(userSignedUp())
        dispatch(loginUser(web3))
      })
    })
  }
}

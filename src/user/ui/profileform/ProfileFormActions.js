import AuthenticationContract from '../../../../build/contracts/Authentication.json'
//import { browserHistory } from 'react-router'

const contract = require('truffle-contract')

export const USER_UPDATED = 'USER_UPDATED'
function userUpdated(user) {
  return {
    type: USER_UPDATED,
    payload: user
  }
}

export function updateUser(name, web3) {
  return function(dispatch) {
    // Using truffle-contract we create the authentication object.
    const authentication = contract(AuthenticationContract)
    authentication.setProvider(web3.currentProvider)

    // Declaring this for later so we can chain functions on Authentication.
    var authenticationInstance

    // Get current ethereum wallet. TODO: Wrap in try/catch.
    var coinbase = web3.eth.coinbase;

    authentication.deployed().then(function(instance) {
      authenticationInstance = instance

      // Attempt to login user.
      authenticationInstance.update(name, {from: coinbase})
      .catch(function(result) {
        // If error...
      })
      .then(function(result) {
        // If no error, update user.

        dispatch(userUpdated({"name": name}))

        alert('Name updated!')
      })
    })
  }
}

import Web3 from 'web3'

const provider = new Web3.providers.HttpProvider('http://localhost:8545')
const web3 = new Web3(provider)

const initialState = {
  data: web3,
  wrongnetwork: true,
}

const web3Reducer = (state = initialState, action) => {
  if (action.type === "SET_WEB_3")
  {
    return Object.assign({}, state, {
      data: action.payload
    })
  }
  if (action.type === 'SET_WRONG_NETWORK_STATUS')
  {
    return Object.assign({}, state, {
      wrongnetwork:action.payload
    })
  }
  return state
}

export default web3Reducer
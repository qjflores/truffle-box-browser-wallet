import Web3 from 'web3'

const provider = new Web3.providers.HttpProvider('http://localhost:8545')
const web3 = new Web3(provider)

const initialState = {
  web3: web3
}

const web3Reducer = (state = initialState, action) => {
  if (action.type === "WEB_3_INITIALIZE") 
  {
    return Object.assign({}, state, {
      web3: action.payload
    })
  }
  return state
}

export default web3Reducer
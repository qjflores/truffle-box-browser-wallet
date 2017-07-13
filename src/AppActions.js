import getWeb3 from './util/getWeb3'

export const SET_WEB_3 = 'SET_WEB_3'
function web3Init(web3) {
  return {
  type:SET_WEB_3,
  payload:web3
  }
}

function wrongNetwork(wrongNetworkBool){
  return {
    type: 'SET_WRONG_NETWORK_STATUS',
    payload: wrongNetworkBool
  }
}

module.exports = {
  setWeb3: (web3) => (dispatch) => {
    console.log('AppActions.setWeb3')
    dispatch(web3Init(web3))
    // DEVELOPER NOTE: uncomment this if you want to track the network the user is on
    /*try {
      web3.version.getNetwork(function(error, result){
        if(!error){
          console.log(result)
          if(result==='42'){
            dispatch(wrongNetwork(false))
          } else {
            dispatch(wrongNetwork(true))
          }
        } else{
          console.log("AppActions.setWeb3")
          console.log(error)
        }
      })
    } catch (error) {
      console.log("AppActions.setWeb3")
      console.log(error)
      dispatch(wrongNetwork(false))
    }*/
  } 
}
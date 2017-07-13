import { connect } from 'react-redux'
import App from './App'
import * as actions from './AppActions'

const mapStateToProps = (state, ownProps) => {
  return {
    web3: state.web3,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setWeb3: (web3) => {
      dispatch(actions.setWeb3(web3))
    },

  }
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer

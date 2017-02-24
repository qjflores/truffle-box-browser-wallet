import { connect } from 'react-redux'
import LoginButton from './LoginButton'
import { loginUser } from './LoginButtonActions'

const mapStateToProps = (state, ownProps) => {
  return {
    web3:state.web3
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoginUserClick: (web3) => {
      event.preventDefault();
      dispatch(loginUser(web3))
    }
  }
}

const LoginButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginButton)

export default LoginButtonContainer

import { connect } from 'react-redux'
import SignUpForm from './SignUpForm'
import { signUpUser } from './SignUpFormActions'

const mapStateToProps = (state, ownProps) => {
  return {
    web3: state.web3
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSignUpFormSubmit: (name, web3) => {
      event.preventDefault();

      dispatch(signUpUser(name, web3))
    }
  }
}

const SignUpFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpForm)

export default SignUpFormContainer

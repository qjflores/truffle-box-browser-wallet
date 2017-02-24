import { connect } from 'react-redux'
import ProfileForm from './ProfileForm'
import { updateUser } from './ProfileFormActions'

const mapStateToProps = (state, ownProps) => {
  return {
    name: state.user.data.name,
    web3: state.web3
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onProfileFormSubmit: (name, web3) => {
      event.preventDefault();

      dispatch(updateUser(name, web3))
    }
  }
}

const ProfileFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileForm)

export default ProfileFormContainer

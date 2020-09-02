import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import User from 'components/User'
import { fetchUser } from 'state/actions/user.action'
import { getUser, getFetchUserStatus } from 'state/selectors/user.selector'
import { removeUserSession } from 'state/actions/home.action'

const mapStateToProps = (state) => ({
  user: getUser(state),
  fetchUserStatus: getFetchUserStatus(state),
})

const mapDispatchToProps = {
  fetchUser,
  removeUserSession,
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(User))

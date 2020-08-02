import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import User from 'components/User'
import { fetchUser } from 'state/actions/user.action'
import { getUser, getFetchUserStatus } from 'state/selectors/user.selector'

const mapStateToProps = (state) => ({
  user: getUser(state),
  fetchUserStatus: getFetchUserStatus(state),
})
const mapDispatchToProps = (dispatch) => ({
  fetchUser: (userId) => dispatch(fetchUser(userId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(User))

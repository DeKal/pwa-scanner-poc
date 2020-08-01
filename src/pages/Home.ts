import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import Home from 'components/Home'
import { removeUserSession } from 'state/actions/home.action'

const mapDispatchToProps = (dispatch) => ({
  removeUserSession: () => dispatch(removeUserSession()),
})

export default connect(null, mapDispatchToProps)(withRouter(Home))

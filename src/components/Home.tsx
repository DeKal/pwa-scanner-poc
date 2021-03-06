import React, { ReactElement } from 'react'
import PropTypes from 'prop-types'
import 'components/Home.scss'
import Button from 'react-bootstrap/Button'
import { HomeProps } from 'types/props'
import logo from 'assets/scanandgo.png'

const Home = ({ history, removeUserSession }: HomeProps): ReactElement => {
  return (
    <div className="home-container">
      <div>
        <img src={logo} className="logo mt-5 " alt="logo" />

        <div className="mb-3">
          <h1 className="font-weight-bold text-dark">Scan & Go</h1>
        </div>
      </div>
      <div className="mb-4">
        <Button
          data-test-id="btn-new-session"
          className="mt-5 mb-5"
          variant="outline-dark"
          size="lg"
          block
          onClick={() => {
            removeUserSession()
            history.push('/user')
          }}
        >
          New session
        </Button>
      </div>
    </div>
  )
}

export default Home
Home.defaultProps = {
  history: {
    push: () => {},
  },
  removeUserSession: () => {},
}
Home.propTypes = {
  history: PropTypes.object,
  removeUserSession: PropTypes.func,
}

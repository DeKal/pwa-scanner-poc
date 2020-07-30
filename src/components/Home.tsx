import React, { ReactElement } from 'react'
import PropTypes from 'prop-types'
import 'components/Home.scss'
import Button from 'react-bootstrap/Button'
import { HomeProps } from 'types/props'

const Home = ({ history, removeUserSession }: HomeProps): ReactElement => {
  return (
    <div className="home-container">
      <div>
        <img
          src={'/images/logo.jpg'}
          className="logo margin-vertical-32"
          alt="logo"
        />

        <div className="margin-32">
          <div className="f-normal margin-16">Welcome to</div>
          <div className="f-big bold c-grey">Foodsavers</div>
        </div>
      </div>
      <div>
        <Button
          className="margin-vertical-32"
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

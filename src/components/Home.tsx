import React, { ReactElement } from 'react'
import PropTypes from 'prop-types'
import 'components/Home.scss'
import { HomeProps } from 'types/props'
import logo from 'assets/scanandgo.png'
import ButtonRemoveSession from './ButtonRemoveSession'

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
        <ButtonRemoveSession
          removeUserSession={removeUserSession}
          history={history}
        />
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

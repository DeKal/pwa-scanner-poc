import React, { ReactElement } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from 'containers/Home'
import User from 'components/User'

const App = (): ReactElement => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/user" component={User} />
      </Switch>
    </Router>
  )
}

export default App

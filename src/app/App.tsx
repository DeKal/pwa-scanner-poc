import React, { ReactElement } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from 'components/Home'

const App = (): ReactElement => {
  return (
    <Router>
      <Switch>
        <Route path="/Home" component={Home} />
      </Switch>
    </Router>
  )
}

export default App

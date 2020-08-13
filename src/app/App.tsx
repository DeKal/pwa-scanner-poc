import React, { ReactElement } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from 'pages/Home'
import User from 'pages/User'
import Products from 'pages/Products'
const App = (): ReactElement => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/user" component={User} />
        <Route path="/product" component={Products} />
      </Switch>
    </Router>
  )
}

export default App

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const Router = () => {
    return (
        <Switch>
           <Route path="/Home" component={Home}/>
        </Switch>
    )
}
export default Router;
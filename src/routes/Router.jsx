// rfe
import React from "react"
import { Route } from "react-router-dom"
import Home from "../views/Home"
import About from "../views/About"
import Contact from "../views/Contact"

const Routes = () => {
  return (
    <React.Fragment>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </React.Fragment>
  )
}

export default Routes

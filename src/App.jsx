// rfc
import React from "react"
import { Route } from "react-router-dom"
import About from "./views/About"
import Home from "./views/Home"
import Contact from "./views/Contact"

const App = () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </div>
  )
}

export default App

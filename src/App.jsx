// rfc
import React from "react"
import { Route } from "react-router-dom"
import About from "./views/About"
import Home from "./views/Home"

const App = () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
  )
}

export default App

// rfc
import React from "react"
import { Route } from "react-router-dom"
import Home from "./views/Home"

const App = () => {
  return (
    <div>
      <Route path="/" component={Home} />
    </div>
  )
}

export default App

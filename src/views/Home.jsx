// rcc
import React, { Component } from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1>Home Page</h1>
        <Footer />
      </div>
    )
  }
}

export default Home

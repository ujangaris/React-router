// rfe
import React from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div style={container}>
        <h1>Contact Page</h1>
        <p>
          The Route component is perhaps the most important component in React
          Router to understand and learn to use well. Its most basic
          responsibility is to render some UI when its path matches the current
          URL.
        </p>
      </div>
      <Footer />
    </div>
  )
}

export default Contact

const container = {
  padding: "0 6rem",
}

// rfe
import React from "react"
import MainLayout from "../layouts/MainLayout"

const About = () => {
  return (
    <MainLayout>
      <div style={container}>
        <h1>About Page</h1>
        <p>
          The Route component is perhaps the most important component in React
          Router to understand and learn to use well. Its most basic
          responsibility is to render some UI when its path matches the current
          URL.
        </p>
      </div>
    </MainLayout>
  )
}

export default About

const container = {
  padding: "0 6rem",
}

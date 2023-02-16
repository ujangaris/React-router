// rfe
import React from "react"
import { Link } from "react-router-dom"
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
        <Link style={link} to="/">
          Back Home
        </Link>
      </div>
    </MainLayout>
  )
}

export default About

const container = {
  padding: "0 6rem 22rem",
}

const link = {
  textDecoration: "none",
  color: "#4A3933",
}

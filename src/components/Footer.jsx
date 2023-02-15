// rfe
import React from "react"

const Footer = () => {
  return (
    <div style={footer}>
      <h1>oh my footer</h1>
    </div>
  )
}

export default Footer

const footer = {
  display: "flex",
  background: "#4F8A8B",
  justifyContent: "center",
  color: "#fff",
  alignItems: "center",
  position: "absolute",
  bottom: "0",
  left: "0",
  right: "0",
  height: "80px",
}

// rfe
import React from "react"

const Navbar = () => {
  return (
    <div style={nav}>
      <h1>BukaKelas.iD</h1>
      <ul style={myUl}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar

const nav = {
  display: "flex",
  background: "#EA907A",
  padding: "0 6rem",
  justifyContent: "space-between",
  color: "#fff",
  alignItems: "center",
}

const myUl = {
  listStyle: "none",
  display: "flex",
  justifyContent: "space-between",
  width: "20%",
}

import React from "react"
import Link from "gatsby-link"
const Menu = () => (
  <div
    style={{
      background: "#f4f4f4",
      padingTop: "10px",
    }}
  >
    <ul
      style={{
        listStyle: "none",
        display: "flex",
        justifyContent: "space-even",
      }}
    >
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/archive">Archive</Link>
      </li>
    </ul>
  </div>
)

export default Menu

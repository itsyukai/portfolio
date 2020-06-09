import React from "react"

const TriangleThing = () => (
  <svg
    preserveAspectRatio="none"
    viewBox="0 0 100 102"
    height="100"
    width="100%"
    xmlns="http://www.w3.org/2000/svg"
    class="svgcolor-light"
  >
    <path d="M0 0 L50 100 L100 0 Z" fill="white" stroke="white">
      <defs>
        <filter id="f1" x="0" y="0" width="200%" height="200%">
          <feOffset result="offOut" in="SourceGraphic" dx="10" dy="10" />
          <feBlend in="SourceGraphic" in2="offOut" mode="normal" />
        </filter>
      </defs>
    </path>
  </svg>
)

export default TriangleThing

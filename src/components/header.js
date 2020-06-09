import React from "react"
import PropTypes from "prop-types"
import theme from "../styles/theme"

import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"

import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"

import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import Slide from "@material-ui/core/Slide"

import logo from "../images/logo-subtract.svg"

const { colors } = theme
function HideOnScroll(props) {
  const { children } = props
  const trigger = useScrollTrigger()

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
}

const useStyles = makeStyles({
  AppBar: {
    // background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",a

    background: colors.black,
    color: colors.white,
    // height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(0,0,0, .3)",
  },
})
const Header = ({ siteTitle, props }) => {
  const classes = useStyles()
  return (
    <header style={{ marginBottom: "5rem" }}>
      <HideOnScroll {...props}>
        <AppBar classes={{ root: classes.AppBar }}>
          <Toolbar>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{}}>
                <Link to="/">
                  <img
                    src={logo}
                    alt="logo"
                    style={{ marginBottom: "0", display: "block" }}
                  />
                </Link>
              </div>
              <div
                style={{
                  justifyContent: "space-between",
                }}
              >
                <Link to="/#about">About</Link>
                <Link to="/#experience">Experience</Link>
                <Link to="/#projects">Projects</Link>
                <Link to="/#contact">Contact</Link>
                <Link to="/resume.png">Resume</Link>
              </div>
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </header>
  )
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import StyledMain from "../styles/main"
import About from "../components/sections/about"
import Contact from "../components/sections/contact"
import Experience from "../components/sections/experience"
import Projects from "../components/sections/projects"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <StyledMain>
      <About id="about" />
      <Experience id="experience" />
      <Projects id="projects" />
      <Contact id="contact" />
    </StyledMain>
  </Layout>
)

export default IndexPage

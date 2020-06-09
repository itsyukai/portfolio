import React from "react"
import StyledSectionHeading from "../../styles/sectionHeading"
import SectionBar from "../sectionBar"
import theme from "../../styles/theme"
import styled from "styled-components"
const { colors } = theme

const BackgroundContainer = styled.div`
  background: white;
  width: 100%;
`

const StyledSection = styled.div`
  padding: 50px 24px 100px 24px;
  max-width: 700px;
  margin: 0 auto;
`
const Projects = () => (
  <BackgroundContainer>
    <StyledSection>
      <StyledSectionHeading>Projects</StyledSectionHeading>
      <SectionBar />
      <h1>Projects</h1>
      <p>
        Commodo duis eu ea officia quis ad enim nisi anim minim adipisicing enim
        tempor. Exercitation exercitation sint pariatur eu non aliquip officia
        laborum veniam reprehenderit ipsum est incididunt. Elit enim eiusmod
        incididunt cillum deserunt aliqua commodo.
      </p>
    </StyledSection>
  </BackgroundContainer>
)

export default Projects

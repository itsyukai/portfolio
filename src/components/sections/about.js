import React, { Component } from "react"
import StyledSectionHeading from "../../styles/sectionHeading"
import SectionBar from "../sectionBar"
import theme from "../../styles/theme"
import styled from "styled-components"
const { colors } = theme

const BackgroundContainer = styled.div`
  background: ${colors.darkBlue};
  width: 100%;
`
const StyledSection = styled.div`
  padding: 0px 24px 200px 24px;
  max-width: 700px;
  margin: 0 auto;
`

class About extends Component {
  render() {
    return (
      <BackgroundContainer>
        <StyledSection>
          <StyledSectionHeading>About</StyledSectionHeading>

          <SectionBar />
          <h3>Hi, I'm </h3>
          <h1>Yukai Yang</h1>
          <p>
            I'm newly graduated software engineer from San Jose State University
            where I majored in computer science. My most recent focus has been
            web development.
          </p>
        </StyledSection>
      </BackgroundContainer>
    )
  }
}
export default About

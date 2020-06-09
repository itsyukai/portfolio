import React from "react"
import StyledSectionHeading from "../../styles/sectionHeading"
import SectionBar from "../sectionBar"
import { TextField, Button, Link } from "@material-ui/core/"
import styled from "styled-components"
import TriangleThing from "../trianglething"

import theme from "../../styles/theme"
const { colors } = theme

const BackgroundContainer = styled.div`
  background: ${colors.navy};
  width: 100%;
`
const StyledSection = styled.div`
  padding: 50px 24px 100px 24px;
  max-width: 700px;
  margin: 0 auto;
`
const Contact = () => (
  <BackgroundContainer>
    <TriangleThing />

    <StyledSection>
      <StyledSectionHeading>Contact</StyledSectionHeading>
      <SectionBar />
      Want something built or have a question?
      <Button>
        <Link to={`mailto:'itsyukai@gmail.com'`}>Let's talk.</Link>
      </Button>
    </StyledSection>
  </BackgroundContainer>
)

export default Contact

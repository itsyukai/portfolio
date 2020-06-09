import { styled } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"

const StyledMain = styled(Container)({
  width: "100%",
  maxWidth: "none",
  minHeight: "100vh",
  margin: 0,

  // paddingTop: " 200px",
  padding: 0,
  display: "flex",
  flexDirection: "column",
})
export default StyledMain

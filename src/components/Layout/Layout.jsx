import { useSelector } from "react-redux"
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch"
import { Box } from "@mui/material";
import colors from "../../utils/colors";
const useStyle = (theme) => ({
  layout: {
    background: colors[theme].background,
  },
  texts: {
    color: colors[theme].text.primary
  }
})
function Layout () {
  const { theme } = useSelector(state => state.theme);
  const classes = useStyle(theme);
  return (
    <Box sx={classes.layout}>
      <ThemeSwitch />
      <h1 style={classes.texts}>Hello World 2</h1>
      <p style={classes.texts}>Welcome to my world!</p>
    </Box>
  )
}

export default Layout

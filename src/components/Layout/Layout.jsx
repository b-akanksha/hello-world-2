import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import colors from "../../utils/colors";
import Header from "../Header/Header";
import AboutMe from "../AboutMe/AboutMe";
const useStyle = (theme) => ({
  layout: {
    padding: "16px",
    background: colors[theme].background,
  },
});
function Layout() {
  const { theme } = useSelector((state) => state.theme);
  const classes = useStyle(theme);
  return (
    <Box sx={classes.layout}>
      <Header />
      <AboutMe />
    </Box>
  );
}

export default Layout;

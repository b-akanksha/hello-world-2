import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import Header from "../Header/Header";
import AboutMe from "../AboutMe/AboutMe";
import RecentWork from "../RecentWork/RecentWork";
import { useStyles } from "../../utils/styles";

function Layout() {
  const { theme } = useSelector((state) => state.theme);
  const classes = useStyles(theme);
  return (
    <Box sx={classes.layout}>
      <Header />
      <AboutMe />
      <RecentWork />
    </Box>
  );
}

export default Layout;

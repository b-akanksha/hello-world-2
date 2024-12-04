import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../redux/themeSlice";
import { Box, IconButton } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import colors from "../../utils/colors";

const useStyle = (theme) => ({
  selectedButton: {
    backgroundColor: colors[theme].accent.primaryHover,
    "& svg": {
      color: colors[theme].accent.primaryTextHover,
    },
    "&:hover": {
      backgroundColor: colors[theme].accent.primary,
      "& svg": {
        color: colors[theme].accent.primaryText,
      },
    },
  },
  unselectedButton: {
    backgroundColor: colors[theme].accent.primary,
    "& svg": {
      color: colors[theme].accent.primaryText,
    },
    "&:hover": {
      backgroundColor: colors[theme].accent.primaryHover,
      "& svg": {
        color: colors[theme].accent.primaryTextHover,
      },
    },
  },
});
function ThemeSwitch() {
  const { theme } = useSelector((state) => state.theme);
  const classes = useStyle(theme);
  const dispatch = useDispatch();
  const handleChange = (theme) => dispatch(setTheme(theme));

  console.log(theme);
  return (
    <Box>
      <IconButton
        onClick={() => handleChange("light")}
        style={{ borderRadius: "8px 0 0 8px" }}
        sx={
          theme === "light" ? classes.selectedButton : classes.unselectedButton
        }
      >
        <LightModeIcon />
      </IconButton>
      <IconButton
        onClick={() => handleChange("dark")}
        style={{ borderRadius: "0 8px 8px 0" }}
        sx={
          theme === "dark" ? classes.selectedButton : classes.unselectedButton
        }
      >
        <DarkModeIcon />
      </IconButton>
    </Box>
  );
}

export default ThemeSwitch;

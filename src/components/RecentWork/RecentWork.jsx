import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import colors from "../../utils/colors";
import sortify from "../../assets/sortify.png";
import popify from "../../assets/popify.png";
import readiculous from "../../assets/readiculous.png";

const useStyle = (theme) => ({
  texts: {
    color: colors[theme].text.primary,
  },
  recentwork: { margin: { xs: 0, md: 2, lg: 2 } },
  works: {
    display: "flex",
    flexWrap: "wrap",
  },
  work: {
    width: { sm: "100%", sm: "45%", md: "45%", lg: "30%" },
    background: colors[theme].section.color,
    border: `1px solid ${colors[theme].border}`,
    borderRadius: 1,
    marginX: { xs: 0, sm: 1, md: 1 },
    marginY: 2,
    padding: 1,
    "&:hover": {
      background: colors[theme].section.hover,
    },
  },
  workImg: {
    cursor: "pointer",
    width: "100%",
  },
});
function RecentWork() {
  const { theme } = useSelector((state) => state.theme);
  const classes = useStyle(theme);
  const openPage = (page) => {
    window.open(page, "_blank");
  };
  return (
    <Box sx={classes.recentwork}>
      <Typography variant="h5" sx={classes.texts} marginBottom={2}>
        Recent Works
      </Typography>
      <Box sx={classes.works}>
        <Box sx={classes.work}>
          <Box>
            <Typography variant="subtitle1" sx={classes.texts}>
              Sortify
            </Typography>
            <Typography variant="caption" sx={classes.texts}>
              Sortify: A web-based sorting visualizer that helps users
              understand various sorting algorithms through interactive
              visualizations
            </Typography>
          </Box>
          <img
            src={sortify}
            onClick={() => openPage("https://b-akanksha.github.io/sortify/")}
            style={classes.workImg}
          />
        </Box>
        <Box sx={classes.work}>
          <Box>
            <Typography variant="subtitle1" sx={classes.texts}>
              Popify
            </Typography>
            <Typography variant="caption" sx={classes.texts}>
              Popify: A web app that analyzes the popularity of the artists and
              tracks you listen to provide insights into your music preferences.
            </Typography>
          </Box>
          <img
            src={popify}
            onClick={() => openPage("https://b-akanksha.github.io/popify/#")}
            style={classes.workImg}
          />
        </Box>
        <Box sx={classes.work}>
          <Box>
            <Typography variant="subtitle1" sx={classes.texts}>
              Readiculous
            </Typography>
            <Typography variant="caption" sx={classes.texts}>
              Readiculous: A personal project showcasing the books I've read,
              along with my honest reviews and reflections on each.
            </Typography>
          </Box>
          <img
            src={readiculous}
            onClick={() =>
              openPage("https://b-akanksha.github.io/readiculous/")
            }
            style={classes.workImg}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default RecentWork;

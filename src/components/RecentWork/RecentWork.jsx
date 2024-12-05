import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import React from "react";
import data from "../../utils/data";
import { useStyles } from "../../utils/styles";

function RecentWork() {
  const { theme } = useSelector((state) => state.theme);
  const classes = useStyles(theme);
  const openPage = (page) => {
    window.open(page, "_blank");
  };

  return (
    <Box sx={classes.recentwork}>
      <Typography variant="h5" sx={classes.texts} marginBottom={2}>
        Recent Works
      </Typography>
      <Box sx={classes.works}>
        {React.Children.toArray(
          data.projects.map((project) => (
            <Box sx={classes.work}>
              <Box>
                <Typography variant="subtitle2" sx={classes.texts}>
                  {project.title}
                </Typography>
                <Typography variant="body2" sx={classes.texts}>
                  {project.description}
                </Typography>
              </Box>
              <img
                src={project.image}
                onClick={() => openPage(project.link)}
                style={classes.workImg}
              />
            </Box>
          )),
        )}
      </Box>
    </Box>
  );
}

export default RecentWork;

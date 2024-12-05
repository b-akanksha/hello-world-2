import { Box, Chip, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import React from "react";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import GroupsIcon from "@mui/icons-material/Groups";
import CodeIcon from "@mui/icons-material/Code";
import ScheduleIcon from "@mui/icons-material/Schedule";
import BugReportIcon from "@mui/icons-material/BugReport";
import BuildIcon from "@mui/icons-material/Build";
import data from "../../utils/data";
import { useStyles } from "../../utils/styles";

function AboutMe() {
  const { theme } = useSelector((state) => state.theme);
  const classes = useStyles(theme);

  const openPage = (page) => {
    window.open(page, "_blank");
  };

  const skills = [
    {
      skill: "Critical Thinking & Problem Solving",
      description: "Analyzing challenges and finding effective solutions.",
      icon: <LightbulbIcon sx={classes.icon} fontSize="large" />,
      skills: ["Problem Solving", "Agility"],
    },
    {
      skill: "Teamwork & Communication",
      description: "Collaborating effectively and sharing ideas clearly.",
      icon: <GroupsIcon sx={classes.icon} fontSize="large" />,
      skills: ["Collaboration", "Communication"],
    },
    {
      skill: "Time Management & Learning",
      description: "Balancing priorities and continuously improving.",
      icon: <ScheduleIcon sx={classes.icon} fontSize="large" />,
      skills: ["Time Management", "Continuous Learning"],
    },
    {
      skill: "Frontend Development",
      description: "Creating responsive and user-friendly interfaces.",
      icon: <CodeIcon sx={classes.icon} fontSize="large" />,
      skills: ["JS", "HTML5-CSS", "ReactJS", "Redux"],
    },
    {
      skill: "Testing and Debugging",
      description: "Ensuring code quality and application reliability.",
      icon: <BugReportIcon sx={classes.icon} fontSize="large" />,
      skills: ["Jest", "React Testing Library", "MABL"],
    },
    {
      skill: "Tools and Automation",
      description: "Streamlining workflows with modern tools.",
      icon: <BuildIcon sx={classes.icon} fontSize="large" />,
      skills: ["Postman", "MABL"],
    },
  ];

  return (
    <Box sx={classes.aboutme}>
      <Box sx={classes.aboutMeBox}>
        <Box sx={classes.info}>
          <Typography variant="h5" sx={classes.texts} marginBottom={2}>
            About Me
          </Typography>
          <Typography variant="body1" sx={classes.texts}>
            {data.aboutMe.text}
          </Typography>
        </Box>
        <Box sx={classes.metaData}>
          {React.Children.toArray(
            data.experiences.map((exp) => (
              <Box sx={classes.metaBox}>
                <Typography variant="subtitle1" sx={classes.texts}>
                  {exp.title}
                </Typography>
                <Box sx={classes.metaInfo}>
                  <Typography
                    variant="body2"
                    sx={{ ...classes.texts, ...classes.boldText }}
                  >
                    {exp.duration}
                  </Typography>
                </Box>
              </Box>
            )),
          )}
          <Box
            sx={{ ...classes.metaBox, cursor: "pointer" }}
            onClick={() => openPage(data.cv.link)}
          >
            <Box sx={classes.metaInfo}>
              <PictureAsPdfIcon sx={classes.icon} />
              <Typography
                variant="body2"
                marginLeft={1}
                sx={{ ...classes.texts, ...classes.boldText, ...classes.icon }}
              >
                {data.cv.name}{" "}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={classes.cardContainer}>
        {React.Children.toArray(
          skills.map((skill) => (
            <Box sx={classes.card}>
              <Box sx={classes.cardContent}>
                {skill.icon}
                <Box marginX={2}>
                  <Typography
                    variant="body1"
                    sx={{ ...classes.texts, ...classes.boldText }}
                  >
                    {skill.skill}
                  </Typography>
                  <Typography variant="caption" sx={classes.texts}>
                    {skill.description}
                  </Typography>
                  <Box sx={classes.cardContainer}>
                    {React.Children.toArray(
                      skill.skills.map((tech) => (
                        <Chip
                          size="small"
                          label={`#${tech.replace(/\s+/g, "")}`}
                          sx={classes.chip}
                        />
                      )),
                    )}
                  </Box>
                </Box>
              </Box>
            </Box>
          )),
        )}
      </Box>
    </Box>
  );
}

export default AboutMe;

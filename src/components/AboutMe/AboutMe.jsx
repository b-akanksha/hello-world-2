import { Box, Chip, IconButton, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import colors from "../../utils/colors";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import React from "react";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import GroupsIcon from "@mui/icons-material/Groups";
import CodeIcon from "@mui/icons-material/Code";
import ScheduleIcon from "@mui/icons-material/Schedule";
import BugReportIcon from "@mui/icons-material/BugReport";
import BuildIcon from "@mui/icons-material/Build";

const useStyle = (theme) => ({
  aboutme: {
    marginY: 2,
  },
  aboutMeBox: {
    display: "flex",
    flexWrap: "wrap",
  },
  info: {
    flexBasis: { xs: "100%", md: "65%" },
    marginX: { xs: 0, md: 2 },
    paddingRight: { xs: 0, md: 2 },
    borderRight: { xs: "none", md: `1px solid ${colors[theme].border}` },
  },
  metaData: {
    flexBasis: { xs: "100%", md: "25%" },
    display: "flex",
    flexWrap: "wrap",
    marginX: { xs: 0, md: 0, lg: 2 },
    marginY: 2,
  },
  metaBox: {
    width: { xs: "100%", md: "100%", lg: "50%" },
    marginY: 1,
  },
  metaInfo: {
    display: "flex",
    alignItems: "center",
  },
  texts: {
    color: colors[theme].text.primary,
  },
  button: {
    background: "transparent",
    padding: 0,
    "& svg": {
      color: colors[theme].text.primary,
      "&:hover": {
        color: colors[theme].text.hover,
      },
    },
  },
  boldText: {
    fontWeight: "500",
  },
  icon: {
    color: colors[theme].text.primary,
    "&:hover": {
      color: colors[theme].text.hover,
    },
  },
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    marginY: 2,
    justifyContent: "normal",
  },
  card: {
    background: colors[theme].section.color,
    border: `1px solid ${colors[theme].border}`,
    borderRadius: 1,
    marginX: 1,
    marginY: 2,
    padding: 1,
    width: { xs: "100%", md: "30%" },

    "&:hover": {
      background: colors[theme].section.hover,
    },
  },
  cardContent: {
    display: "flex",
    marginY: 2,
    justifyContent: "normal",
  },
  chip: {
    background: colors[theme].section.color,
    border: `1px solid ${colors[theme].border}`,
    borderRadius: 2,
    margin: 1,
    color: colors[theme].text.primary,
  },
});

function AboutMe() {
  const { theme } = useSelector((state) => state.theme);
  const classes = useStyle(theme);

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
      skills: ["JavaScript", "HTML5", "CSS", "React.js", "Redux"],
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
            Passionate and detail-oriented software engineer with 4 years of
            experience in Front-End and BFF development, specializing in
            creating efficient, scalable, and user-focused web applications.
            Skilled in React.js, Redux, and accessibility-focused design, I
            thrive on solving complex problems and delivering impactful
            solutions. With a strong foundation in teamwork and continuous
            learning, I aim to enhance user experiences through innovative and
            reliable technology. Proud recipient of multiple accolades,
            including 3rd place in the 2024 iCIMS Hackathon. Eager to make a
            meaningful impact through my expertise and creativity.
          </Typography>
        </Box>
        <Box sx={classes.metaData}>
          <Box sx={classes.metaBox}>
            <Typography variant="subtitle1" sx={classes.texts}>
              Software Engineer, iCIMS India
            </Typography>
            <Box sx={classes.metaInfo}>
              <Typography
                variant="body2"
                sx={{ ...classes.texts, ...classes.boldText }}
              >
                March, 2023 - Present
              </Typography>
            </Box>
          </Box>
          <Box sx={classes.metaBox}>
            <Typography variant="subtitle1" sx={classes.texts}>
              Software Engineer, GlobalLogic India
            </Typography>
            <Box sx={classes.metaInfo}>
              <Typography
                variant="body2"
                sx={{ ...classes.texts, ...classes.boldText }}
              >
                Dec, 2020 - March, 2023
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{ ...classes.metaBox, cursor: "pointer" }}
            onClick={() =>
              openPage(
                "https://drive.google.com/file/d/1INlaxeSjJ-dccUKclEcicJ_HkhFonEq9/view?usp=sharing",
              )
            }
          >
            <Box sx={classes.metaInfo}>
              <PictureAsPdfIcon sx={classes.icon} />
              <Typography
                variant="body2"
                marginLeft={1}
                sx={{ ...classes.texts, ...classes.boldText, ...classes.icon }}
              >
                akanksha-resume.pdf{" "}
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

import { Box, IconButton, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import colors from "../../utils/colors";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import CodeIcon from "@mui/icons-material/Code";

const useStyle = (theme) => ({
  aboutme: {
    marginY: 2,
  },
  aboutMeBox: {
    display: "flex",
    flexWrap: "wrap",
  },
  info: {
    flexBasis: { xs: "100%", md: "60%" },
    marginX: { xs: 0, md: 2 },
    paddingRight: { xs: 0, md: 2 },
    borderRight: { xs: "none", md: `1px solid ${colors[theme].border}` },
  },
  metaData: {
    flexBasis: { xs: "100%", md: "30%" },
    display: "flex",
    flexWrap: "wrap",
    marginX: { xs: 0, md: 0, lg: 2 },
    marginY: 2,
  },
  metaBox: {
    width: { xs: "100%", md: "100%", lg: "50%" },
    marginY: { xs: 1, md: 1, lg: 0 },
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
    width: { xs: "100%", md: "25%" },

    "&:hover": {
      background: colors[theme].section.hover,
    },
  },
});

function AboutMe() {
  const { theme } = useSelector((state) => state.theme);
  const classes = useStyle(theme);

  const handleContact = () => {
    const email = "akanksha.chandrashekar@gmail.com";
    const subject = "Hello there!";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    window.location.href = mailtoLink;
  };

  const openPage = (page) => {
    window.open(page, "_blank");
  };
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
              Location
            </Typography>
            <Typography
              variant="body2"
              sx={{ ...classes.texts, ...classes.boldText }}
            >
              🇮🇳 Udupi, India
            </Typography>
          </Box>
          <Box sx={classes.metaBox}>
            <Typography variant="subtitle1" sx={classes.texts}>
              Github
            </Typography>
            <Box sx={classes.metaInfo}>
              <GitHubIcon sx={classes.icon} />
              <Typography
                variant="body2"
                marginX={1}
                sx={{ ...classes.texts, ...classes.boldText }}
              >
                b-akanksha{" "}
              </Typography>
              <IconButton
                sx={classes.button}
                onClick={() => openPage("https://github.com/b-akanksha")}
              >
                <ArrowOutwardIcon />
              </IconButton>
            </Box>
          </Box>
          <Box sx={classes.metaBox}>
            <Typography variant="subtitle1" sx={classes.texts}>
              Linkedin
            </Typography>
            <Box sx={classes.metaInfo}>
              <LinkedInIcon sx={classes.icon} />
              <Typography
                variant="body2"
                marginX={1}
                sx={{ ...classes.texts, ...classes.boldText }}
              >
                c-akanksha{" "}
              </Typography>
              <IconButton
                sx={classes.button}
                onClick={() =>
                  openPage("https://www.linkedin.com/in/c-akanksha")
                }
              >
                <ArrowOutwardIcon />
              </IconButton>
            </Box>
          </Box>
          <Box sx={classes.metaBox}>
            <Typography variant="subtitle1" sx={classes.texts}>
              Email
            </Typography>
            <Box sx={classes.metaInfo}>
              <MailIcon sx={classes.icon} />
              <Typography
                variant="body2"
                marginX={1}
                sx={{ ...classes.texts, ...classes.boldText }}
              >
                akanksha.chandrashekar{" "}
              </Typography>
              <IconButton sx={classes.button} onClick={handleContact}>
                <ArrowOutwardIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={classes.cardContainer}>
        <Box sx={classes.card}>
          <Box sx={classes.cardContainer}>
            <CodeIcon sx={classes.icon} fontSize="large" />
            <Box marginX={2}>
              <Typography
                variant="body1"
                sx={{ ...classes.texts, ...classes.boldText }}
              >
                Software Engineer
              </Typography>
              <Typography variant="subtitle2" sx={classes.texts}>
                iCIMS India
              </Typography>
            </Box>
          </Box>
          <Typography variant="caption" sx={classes.texts}>
            March, 2023 - Present
          </Typography>
        </Box>
        <Box sx={classes.card}>
          <Box sx={classes.cardContainer}>
            <CodeIcon sx={classes.icon} fontSize="large" />
            <Box marginX={2}>
              <Typography
                variant="body1"
                sx={{ ...classes.texts, ...classes.boldText }}
              >
                Software Engineer
              </Typography>
              <Typography variant="subtitle2" sx={classes.texts}>
                GlobalLogic India
              </Typography>
            </Box>
          </Box>
          <Typography variant="caption" sx={classes.texts}>
            Dec, 2020 - March, 2023
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default AboutMe;

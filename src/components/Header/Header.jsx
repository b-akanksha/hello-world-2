import { Box, Button, Typography } from "@mui/material";
import headerImg from "../../assets/header.png";
import { useSelector } from "react-redux";
import colors from "../../utils/colors";
import MessageIcon from "@mui/icons-material/Message";

const useStyle = (theme) => ({
  headerBox: {
    position: "relative",
    width: "100%",
    paddingBottom: "16px",
  },
  headerImg: {
    background: `url(${headerImg})`,
    width: "100%",
    height: "200px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    borderRadius: 2,
    border: `1px solid ${colors[theme].border}`,
  },
  avatarContainer: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "16px",
    marginTop: "-50px",
    padding: "16px",
    "@media (max-width: 600px)": {
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
  avatarImg: {
    background: `url(${headerImg})`,
    width: "150px",
    height: "150px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    borderRadius: "50%",
    border: `1px solid ${colors[theme].border}`,
    "@media (max-width: 600px)": {
      marginBottom: "16px",
    },
  },
  infoAndActions: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    flexWrap: "wrap",
    gap: "16px",
    "@media (max-width: 600px)": {
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
  personalInfo: {
    display: "flex",
    flexDirection: "column",
    minWidth: "200px",
    "@media (max-width: 600px)": {
      width: "100%",
    },
  },
  actions: {
    display: "flex",
    gap: "8px",
    alignItems: "center",
    "@media (max-width: 600px)": {
      width: "100%",
      justifyContent: "flex-start",
    },
  },
  contactButton: {
    background: colors[theme].accent.primary,
    borderRadius: 1,
    color: colors[theme].accent.primaryText,
    "& svg": {
      color: colors[theme].accent.primaryText,
    },
    "&:hover": {
      background: colors[theme].accent.primaryHover,
      color: colors[theme].accent.primaryTextHover,
      "& svg": {
        color: colors[theme].accent.primaryTextHover,
      },
    },
  },
  texts: {
    color: colors[theme].text.primary,
  },
});

function Header() {
  const { theme } = useSelector((state) => state.theme);
  const classes = useStyle(theme);

  const handleContact = () => {
    const email = "akanksha.chandrashekar@gmail.com";
    const subject = "Hello there!";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    window.location.href = mailtoLink;
  };

  return (
    <Box borderBottom={`1px solid ${colors[theme].border}`} paddingBottom={2}>
      <Box position="relative" sx={classes.headerBox}>
        <Box sx={classes.headerImg} />
        <Box sx={classes.avatarContainer}>
          <Box sx={classes.avatarImg} />
          <Box sx={classes.infoAndActions}>
            <Box sx={classes.personalInfo}>
              <Typography variant="h4" sx={classes.texts}>
                Akanksha C
              </Typography>
              <Typography variant="body1" sx={classes.texts}>
                Software Engineer @ iCIMS India
              </Typography>
            </Box>
            <Box sx={classes.actions}>
              <Button
                startIcon={<MessageIcon />}
                sx={classes.contactButton}
                variant="contained"
                onClick={handleContact}
              >
                Get in touch
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box marginX={{ xs: 0, md: 2 }}>
        <Typography variant="h5" marginY={1} sx={classes.texts}>
          Experience
        </Typography>
        <Typography variant="body1" sx={classes.texts}>
          Experienced Front-End and BFF developer with a strong background in
          creating user-focused web applications, ensuring accessibility, and
          contributing to successful team projects.
        </Typography>
      </Box>
    </Box>
  );
}

export default Header;

import { Box, Button, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import colors from "../../utils/colors";
import MessageIcon from "@mui/icons-material/Message";
import data from "../../utils/data";
import { useStyles } from "../../utils/styles";

function Header() {
  const { theme } = useSelector((state) => state.theme);
  const classes = useStyles(theme);

  const handleContact = () => {
    const email = data.currentEmail;
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
                {data.name}
              </Typography>
              <Typography variant="body1" sx={classes.texts}>
                {data.currentPosition}
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
          {data.experience.text}
        </Typography>
      </Box>
    </Box>
  );
}

export default Header;

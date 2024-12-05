import colors from "./colors";
import headerLight from "../assets/light.jpg";
import headerDark from "../assets/dark.jpg";

export const useStyles = (theme) => ({
  layout: {
    padding: "16px",
    background: colors[theme].background,
  },
  headerBox: {
    position: "relative",
    width: "100%",
    paddingBottom: "16px",
  },
  headerImg: {
    background: `url(${theme === "light" ? headerLight : headerDark})`,
    width: "100%",
    height: "200px",
    backgroundSize: "contain",
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
    background: `url(${theme === "light" ? headerLight : headerDark})`,
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
    width: { xs: "100%", sm: "50%", md: "50%", lg: "50%" },
    marginY: 1,
  },
  metaInfo: {
    display: "flex",
    alignItems: "center",
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
    width: { xs: "100%", sm: "45%", md: "29%", lg: "30%" },
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
    marginX: 1,
    marginTop: 1,
    color: colors[theme].text.primary,
    fontWeight: 500,
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

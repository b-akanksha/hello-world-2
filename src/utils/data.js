import sortify from "../assets/sortify.png";
import popify from "../assets/popify.png";
import readiculous from "../assets/readiculous.png";

const data = {
  name: "Akanksha C",
  currentPosition: "Software Engineer @ iCIMS India",
  currentEmail: "akanksha.chandrashekar@gmail.com",
  experience: {
    text: "Crafting intuitive, user-first web experiences with seamless designs and robust code, all while keeping accessibility and creativity at the heart of every project! ✨",
  },
  aboutMe: {
    text: "Developer with 4 years of Front-End and BFF expertise, transforming ideas into fast, scalable, and user-focused apps! 🪄✨ Armed with React, Redux, and a flair for accessibility, I tackle complex problems with creative solutions. Team player? Check. Lifelong learner? Always. 🧠🎯 Hackathon champ? Oh, you bet—3rd place at the 2024 iCIMS Hackathon! Ready to turn coffee ☕ into code and innovation into impact. 🚀",
  },
  experiences: [
    {
      title: "Software Engineer, iCIMS India",
      duration: "March, 2023 - Present",
    },
    {
      title: "Software Engineer, GlobalLogic India",
      duration: "Dec, 2020 - March, 2023",
    },
  ],
  cv: {
    name: "akanksha-resume.pdf",
    link: "https://drive.google.com/file/d/1INlaxeSjJ-dccUKclEcicJ_HkhFonEq9/view?usp=sharing",
  },
  projects: [
    {
      title: "Sortify",
      description:
        "A web-based sorting visualizer that helps users understand various sorting algorithms through interactive visualizations.",
      image: sortify,
      link: "https://b-akanksha.github.io/sortify/",
    },
    {
      title: "Popify",
      description:
        "A web app that analyzes the popularity of the artists and tracks you listen to provide insights into your music preferences.",
      image: popify,
      link: "https://b-akanksha.github.io/popify/#",
    },
    {
      title: "Readiculous",
      description:
        "A personal project showcasing the books I've read, along with my honest reviews and reflections on each.",
      image: readiculous,
      link: "https://b-akanksha.github.io/readiculous/",
    },
  ],
};

export default data;

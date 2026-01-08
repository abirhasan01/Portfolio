import Backend_logo from "./backend.png";
import Database_logo from "./database.png";
import Frontend_logo from "./frontend.png";
import project1 from "./project1.png";
import project2 from "./project2.png";
import project3 from "./project3.png";
import React_Logo from "./reactjs.png";
import Tools_logo from "./tools.png";

export const assets = {
  React_Logo,
  project1,
  project2,
  project3,
  Database_logo,
  Frontend_logo,
  Backend_logo,
  Tools_logo
};

export const projectDetails = {
  Project1: {
    img: project1,
    name: "ShopSphere",
    github: "https://github.com/abirhasan01/ShopSphere",
    live: "https://shopsphere-puce.vercel.app/",
  },
  Project2: {
    img: project2,
    name: "PhotoStudio-AI",
    github: "https://github.com/abirhasan01/PhotoStudio-AI",
    live: "https://photostudio-ai.vercel.app/",
  },
  Project3: {
    img: project3,
    name: "Echozy",
    github: "https://github.com/abirhasan01/Echozy",
    live: "",
  },
};

export const skillsDetails = {
  frontend: {
    names: [
      "FrontEnd",
      "HTML",
      "CSS",
      "Bootstrap",
      "Tailwind",
      "JavaScript",
      "React",
    ],
    img: Frontend_logo,
  },
  tools: {
    names: ["Tools", "Git", "GitHub", "VS Code", "Figma"],
    img: Tools_logo,
  },
  backend: {
    names: ["Backend", "Node", "Express", "REST API"],
    img: Backend_logo,
  },
  database: {
    names: ["Database", "MongoDB", "JSON", "PostgreSQL"],
    img: Database_logo,
  },
};
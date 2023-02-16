import pmtool from "../public/assets/pmtool.png";
import crypto from "../public/assets/crypto.png";
import focused from "../public/assets/focused.png";
import servicedoor from "../public/assets/servicedoor.png";

const roles = [
  "Full Stack Developer",
  "Problem Solver",
  "UI Developer",
  "UI/UX Designer",
  "Blockchain Developer",
];

const languages = ["Javascript", "Python", "Java", "C++", "SQL"];
const tools = [
  { name: "React", desc: "2 years of experience" },
  { name: "Node", desc: "mastered API design" },
  { name: "Vue", desc: "elegant designs" },
  { name: "Figma", desc: "UI/UX" },
  { name: "Algorithms", desc: "optimizing code" },
  { name: "Spring", desc: "love for OOP" },
  { name: "MongoDB", desc: "1 year of experience" },
  { name: "REST", desc: "20+ and counting" },
  { name: "Redux", desc: "implemented 2 global stores" },
  { name: "Database Systems", desc: "implemented taco DB" },
];

const projects = [
  {
    index: "01",
    name: "Focused - A Productivity Tool",
    description:
      "A tool which lets user focus and manage their daily or project tasks efficiently",
    techs: ["node", "api", "docker", "rabbitmq"],
    link: "https://github.com/neutr0nian/distributed-food-service",
    img: focused,
  },
  {
    index: "02",
    name: "Service Door - A Blockchain Marketplace",
    description:
      "A marketplace that provides services to consumers with identity and transaction protection",
    techs: ["node", "api", "docker", "rabbitmq"],
    link: "https://github.com/neutr0nian/distributed-food-service",
    img: servicedoor,
  },
  {
    index: "03",
    name: "Cryptoverse - React Cryptocurrency Application",
    description:
      "A application which lets user track and search cyrptocurrency's prices and news.",
    techs: ["react", "API", "tailwind", "context-api"],
    link: "https://github.com/neutr0nian/stack-overflow",
    img: crypto,
  },
  {
    index: "04",
    name: "Project Management Tool",
    description: `A Dashboard application created for University at Buffalo's professors to manage course projects and students.
      `,
    techs: ["node", "api", "docker", "rabbitmq"],
    link: "https://github.com/neutr0nian/stack-overflow",
    img: pmtool,
  },
];

export { roles, projects, languages, tools };

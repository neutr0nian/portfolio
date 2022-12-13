import pmtool from "../public/pmtool.png";
import stack from "../public/stack.png";
import foodService from "../public/foodService.png";

const languages = ["Javascript", "Python", "Ruby", "C++", "SQL"];
const tools = [
  "React",
  "Vue",
  "Node",
  "Tailwind",
  "REST",
  "Docker",
  "Kafka",
  "Flask",
  "Tensor",
  "Algorithms",
  "MongoDB",
  "MySQL",
];

const projects = [
  {
    index: "01",
    name: "Distributed Food-service application",
    description: `<p>A distributed message-based application built using nodejs, rabbitmq, and docker to demonstrate the implementation and working of a microservice architecture.</p>
    <p class='py-2'>The system is broken down into three services 1. Order Service 2. Billing Service and 3. Email Service </p>
    <p class='py-2'>Each service executes independently and pushes the output to a central queue from where other services can retrieve the required input and execute the operation.</p>
    `,
    techs: ["node", "api", "docker", "rabbitmq"],
    link: "https://github.com/neutr0nian/distributed-food-service",
    img: foodService,
  },
  {
    index: "02",
    name: "Stack Overflow - An UI concept",
    description: `<p>A new design concept for stack overflow to make it look more elegant and organized in terms of searching and storing a particular answer for a question.</p>
    <p class='py-2'>Currently, only front end is built with the help of stack overflow's public APIs. The project is in continous progress and will se more UI changes.</p>
    <p class='py-2'>Upcoming releases will include features like searching, pinning the answers/articles and dark mode.</p>`,
    techs: ["react", "API", "tailwind", "context-api"],
    link: "https://github.com/neutr0nian/stack-overflow",
    img: stack,
  },
  {
    index: "03",
    name: "Project Management Tool",
    description: `<p>A CRM like complete full-stack application created for university professors to manage course projects and enrollment of the students in them. </p>
        <p class='py-2'>This application included managing user data, authentication, database CRUD operations, creating user views and REST API's.</p>
        <p class='py-2'>Being a Full-stack developer in the team of 6 also managed the project by organizing the tasks and ensuring a bug-free release in every sprint.</p>
      `,
    techs: ["node", "api", "docker", "rabbitmq"],
    link: "https://github.com/neutr0nian/stack-overflow",
    img: pmtool,
  },
];

export { projects, languages, tools };

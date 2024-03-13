import {
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  nextjs,
  sassWeb,
  mern,
  realested,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "MERN Developer",
    icon: mern,
  },
  {
    title: "Next JS Developer",
    icon: nextjs,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Next Js",
    icon: nextjs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Sass UI Design",
    description:
      "Discover the Future of UI Design with Sass, Next.js, and Tailwind CSS - Welcome to the forefront of web design innovation at Sass UI Design. Harnessing the power of Next.js and Tailwind CSS, we're redefining the standards of user interface excellence.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind css",
        color: "green-text-gradient",
      },
    ],
    image: sassWeb,
    source_code_link: "https://github.com/abduldevlop/sass-web-UI-UX",
    live_web_url: "https://sass-web-ui-ux.vercel.app/",
  },
  {
    name: "Booking",
    description:
      "Our website is built using cutting-edge technologies like React.js for the frontend, Node.js for the backend, and MongoDB for the database.With React.js, we ensure a seamless user experience, enabling dynamic and responsive interfaces.",
    tags: [
      {
        name: "react js",
        color: "orange-text-gradient",
      },
      {
        name: "sass",
        color: "orange-text-gradien",
      },
      {
        name: "node js",
        color: "green-text-gradient",
      },
      {
        name: "mongo db",
        color: "blue-text-gradient",
      },
    ],
    image: realested,
    source_code_link: "https://github.com/abduldevlop/booking.com/tree/main",
    live_web_url: "https://booking-com-murex.vercel.app/",
  },
];

export { services, technologies, testimonials, projects };

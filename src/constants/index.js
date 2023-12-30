import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  postgresql,
  ncas,
  pmc,
  ea,
  soccer_app,
  vehicles_app,
  portfolio,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Seeking for New Opportunities",
    icon: creator,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "IT Technical Support",
    company_name: "Nursing Community Assessment Service",
    icon: ncas,
    iconBg: "#383E56",
    date: "March 2023 – current",
    points: [
      "Support and maintain applications and hardware such as PC and Mac, video cameras and microphones",
      "Operate audiovisual equipment and related software applications within a computerized windows",
      "Collect, organize and maintain a problems and solutions log for use by other technical supports",
      "Check if peers have recorded and sent the videos to the correct server",
    ],
  },
  {
    title: "Web App Developer",
    company_name: "Punjabi Masihi Church",
    icon: pmc,
    iconBg: "#383E56",
    date: "May 2022 – November 2022",
    points: [
      "Developed church app using React Native (Google Store or Apple Store)",
      "Published “GeetChords” app that reads the chords on database and displays the chords on the app",
      "Created a website (punjabichurch.ca) using WordPress and PHP",
    ],
  },
  {
    title: "Quality Analyst",
    company_name: "Electronic Arts – Keywords Studio",
    icon: ea,
    iconBg: "#383E56",
    date: "January 2020 – May 2022",
    points: [
      "Worked with Postman and other tools for testing to test and verify FIFA game mostly used .NET and some C++",
      "Key contributor for test planning, test case creation and bug estimates, etc.",
      "Lead a team of 5 in Systems & Server team, and was a main POC for time tracking for team of 50 teammates",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
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
    name: "Soccer Fullstack",
    description:
      "Web-based platform that allows users to enter data that will be fetched to the backend and also be stored in postreSQL. User inputs are shown as tables, and able to edit or delete.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },
    ],
    image: soccer_app,
    source_code_link: "https://github.com/dohyungkk/soccer_fullstack",
  },
  {
    name: "Vehicle CSV Fullstack",
    description:
      "Web application that is created with React and MUI frontend, Node.js backend. App consists of Login page and Vehicles page in Grid, and backend secures authenticated users to view vehicles.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "materialUI",
        color: "pink-text-gradient",
      },
    ],
    image: vehicles_app,
    source_code_link: "https://github.com/dohyungkk/vehicle_csv_server",
  },
  {
    name: "Portfolio",
    description:
      "New Portfolio created using React.js, ThreeJS and tailwindCSS. I put some effort to visualize some 3D objects. Responsivenss across all devices are ensured as well as performance of the website.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/dohyungkk/PortfolioReact",
  },
];

export { services, technologies, experiences, testimonials, projects };

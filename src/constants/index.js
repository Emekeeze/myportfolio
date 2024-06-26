import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import calculator from "../assets/projects/calculator.png";
import todolist from "../assets/projects/todolist.png";
import income from "../assets/projects/income.png";
import portfolio from "../assets/projects/portfolio.png";




export const HERO_CONTENT = `I am a passionate frontend web developer with a knack for crafting robust and scalable web applications. With one year of hands-on experience, I have honed my skills in front-end technologies such as HTML, CSS, JavaScript, jQuery, Bootstrap, RESTful APIs, React, and TypeScript. My goal is to leverage my expertise to create responsive websites and innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile frontend web developer with a passion for creating efficient and user-friendly web applications. With one year of professional experience, I have developed a strong foundation in various technologies, including HTML, CSS, JavaScript, jQuery, Bootstrap, React, TypeScript, RESTful APIs, and Git/GitHub version control. My journey in frontend web development began with a deep curiosity about how things work, which has evolved into a career driven by continuous learning and adaptation to new challenges. I thrive in collaborative environments and excel at solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Calculator App",
    image: calculator,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "typescript", "Bootstrap"],
    link: "https://calculator-app-seven-livid.vercel.app/"
  },
  {
    title: "To-Do List App",
    image: todolist,
    description:
      "An application for creating and managing tasks and projects, with features such delete tasks that are no longer needed, Lets users mark tasks as completed, often with visual indicators like strikethrough text or checkmarks.",
    technologies: ["HTML", "CSS", "React", "Typescript"],
    link: "https://my-todolist-pi.vercel.app/"
    
  },
  {
    title: "Portfolio Website",
    link: "https://myportfolio-two-flax.vercel.app/",
    image: portfolio,
    description: "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "javascript","Bootstrap"],
  },
  {
    title: "Income Expenses Website",
    image: income,
    description:
      " A user-friendly app designed to help you take control of your finances. Whether you want to monitor your income, track your expenses, or plan for future savings.",
    technologies: ["HTML", "CSS", "javascript","Bootstrap", "React", "Typescript"],
    link:"https://income-expenses-orcin.vercel.app/"
  },
];

export const CONTACT = {
  address: "Zaria, Kaduna State, Nigeria ",
  phoneNo: "+234 7033 2368 29 ",
  email: "ubohjrchukwuemeke@gmail.com",
};
